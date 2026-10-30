import { Link } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import mahasiswa from '../../mahasiswa.json'

export default function Beranda() {
  const { items, loading } = useKoleksi()
  const jumlahKategori = new Set(items.map((item) => item.kategori)).size

  return (
    <section>
      <h1>Mengenal Keindahan Wisata Lampung</h1>
      <p>Tema: {Destinasi.Wisata.Lampung}</p>
      {loading ? (
        <p>Memuat ringkasan...</p>
      ) : (
        <p>
          Ada {10} tugas dalam {4} kategori.
        </p>
      )}
      <Link to="/koleksi">Selengkapnya</Link>
    </section>
  )
}