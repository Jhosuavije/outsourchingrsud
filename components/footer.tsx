export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">RSUD Kepulauan Talaud</h3>
            <p className="text-primary-foreground/90">
              Layanan Outsourcing Cleaning Service & Satpam Profesional
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Layanan</h4>
            <ul className="space-y-2 text-primary-foreground/90">
              <li><a href="/cleaning-service" className="hover:opacity-80 transition-opacity">Cleaning Service</a></li>
              <li><a href="/satpam-service" className="hover:opacity-80 transition-opacity">Satpam 24 Jam</a></li>
              <li><a href="/standards" className="hover:opacity-80 transition-opacity">SOP & Standar</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Informasi</h4>
            <p className="text-primary-foreground/90 text-sm mb-2">
              <strong>Alamat:</strong> RSUD Kabupaten Kepulauan Talaud
            </p>
            <p className="text-primary-foreground/90 text-sm">
              <strong>Jam Operasional:</strong> 24 Jam
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/80 text-sm">
          <p>&copy; 2025 RSUD Kabupaten Kepulauan Talaud. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
