'use client'

import { useState } from 'react'
import { ArrowLeftRight } from 'lucide-react'

export default function IPAddressConverter() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState({
    dotDecimal: '',
    integer: '',
    hexadecimal: '',
    binary: '',
    cidr: '',
  })

  const convertIP = () => {
    let ipInt: number

    if (input.includes('.')) {
      const parts = input.split('.')
      ipInt = parts.reduce((acc, part) => (acc << 8) + parseInt(part), 0) >>> 0
    } else if (input.startsWith('0x')) {
      ipInt = parseInt(input.slice(2), 16)
    } else if (input.includes('/')) {
      const [ip] = input.split('/')
      const parts = ip.split('.')
      ipInt = parts.reduce((acc, part) => (acc << 8) + parseInt(part), 0) >>> 0
    } else {
      ipInt = parseInt(input)
    }

    const dotDecimal = [
      (ipInt >>> 24) & 255,
      (ipInt >>> 16) & 255,
      (ipInt >>> 8) & 255,
      ipInt & 255,
    ].join('.')

    setOutput({
      dotDecimal,
      integer: ipInt.toString(),
      hexadecimal: '0x' + ipInt.toString(16).padStart(8, '0'),
      binary: ipInt.toString(2).padStart(32, '0'),
      cidr: `${dotDecimal}/32`,
    })
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-[#121212] rounded-3xl overflow-hidden shadow-2xl p-6">
        <h2 className="text-2xl font-bold text-white mb-6">IP Address Converter</h2>
        <div className="space-y-6">
          <div>
            <label className="text-sm text-gray-400 mb-2 block">
              INPUT FORMAT
            </label>
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full bg-transparent text-white text-2xl border-b border-gray-800 pb-2 focus:outline-none focus:border-[#FF4747]"
                placeholder="Enter IP address"
              />
            </div>
          </div>
          
          <button
            onClick={convertIP}
            className="w-full flex items-center justify-center space-x-2 bg-transparent border border-gray-800 hover:border-[#FF4747] text-white rounded-xl py-3 transition-colors"
          >
            <ArrowLeftRight className="w-4 h-4" />
            <span>Convert Format</span>
          </button>

          {output.dotDecimal && (
            <div className="space-y-4 mt-6">
              <div>
                <label className="text-sm text-gray-400 mb-1 block">Dot Decimal</label>
                <div className="text-xl text-white">{output.dotDecimal}</div>
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-1 block">Integer</label>
                <div className="text-xl text-white">{output.integer}</div>
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-1 block">Hexadecimal</label>
                <div className="text-xl text-white">{output.hexadecimal}</div>
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-1 block">Binary</label>
                <div className="text-xl text-white font-mono text-sm">{output.binary}</div>
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-1 block">CIDR</label>
                <div className="text-xl text-white">{output.cidr}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

