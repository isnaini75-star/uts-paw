import { Link } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import mahasiswa from '../../mahasiswa.json'

export default function Beranda() {
  const { items, loading } = useKoleksi()
  const jumlahKategori = new Set(items.map((item) => item.kategori)).size

  return (
    <section className='beranda-container'>
      <h1 className="tema-h1">Jelajahi Keindahan Wisata di Lampung!!</h1>
      <p className="tema-p">Tema: {mahasiswa.tema}</p>
      {loading ? (
        <p>Memuat ringkasan...</p>
      ) : (
        <div className="card-info">
          <p> {items.length} wisata </p>
          <p> {jumlahKategori} kategori </p>
        </div>
      )}
      <Link to="/koleksi" className="beranda-link">Ayo lihat destinasi</Link>
    </section>
  )
}