import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import './Tambah.css'

const AWAL = { judul: '', kategori: 'Kuliner', kabupaten: 'Lampung Tengah', hargaTiket: ' ', jamBuka: ' ' }

export default function Tambah() {
  const { tambah } = useKoleksi()
  const navigate = useNavigate()
  const [form, setForm] = useState(AWAL)
  const [galat, setGalat] = useState('')

  const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const simpan = (e) => {
    e.preventDefault()
    if (form.judul.trim().length < 3) {
      setGalat('Judul wajib diisi, minimal 3 karakter.')
      return
    }
    tambah({ ...form, judul: form.judul.trim() })
    navigate('/koleksi')
  }

  return (
    <form className="formulir" onSubmit={simpan} noValidate>
      <h1>Yuk, Tambahkan Wisata di Lampung!!</h1>

      <label htmlFor="judul">Judul</label>
      <input id="judul" name="judul" value={form.judul} onChange={ubah} />
      {galat && <p role="alert">{galat}</p>}

      <label htmlFor="kategori">Kategori</label>
      <select id="kategori wisata" name="kategori" value={form.kategori} onChange={ubah}>
        <option>Kuliner</option>
        <option>Gunung</option>
        <option>Pantai</option>
        <option>Budaya</option>
        <option>Air Terjun</option>
        <option>Rekreasi</option>
        <option>Budaya</option>
      </select>

      <label htmlFor="kabupaten">Kabupaten</label>
      <select id="kabupaten" name="kabupaten" value={form.kabupaten} onChange={ubah}>
        <option >Lampung Selatan</option>
        <option >Lampung Tengah</option>
        <option >Lampung Barat</option>
        <option >Lampung Utara</option>
        <option >Lampung Timur</option>
        <option >Tanggamus</option>
        <option >Way Kanan</option>
        <option >Tulang Bawang</option>
        <option >Pesawaran</option>
        <option >Pringsewu</option>
        <option >Mesuji</option>
        <option >Bandar Lampung</option>
        <option >Metro</option>
        <option >Tulang Bawang Barat</option>
        <option >Pesisir Barat</option>
      </select>

      <label htmlFor="hargaTiket">Harga Tiket (Rp) </label>
      <input id="hargaTiket" name="hargaTiket" value={form.hargaTiket} onChange={ubah} />
      {galat && <p role="alert">{galat}</p>}

      <label htmlFor="jamBuka">Jam Buka </label>
      <input id="jamBuka" name="jamBuka" value={form.jamBuka} onChange={ubah} />
      {galat && <p role="alert">{galat}</p>}

      <button type="submit">Simpan</button>
    </form>
  )
}