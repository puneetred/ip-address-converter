import IPAddressConverter from '../components/IPAddressConverter'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FF4747] p-4 sm:p-8 md:p-16 lg:p-24 flex items-center justify-center">
      <IPAddressConverter />
    </main>
  )
}

