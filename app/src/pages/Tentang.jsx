import mahasiswa from '../../mahasiswa.json'

// Ganti dengan alamat repo fork kamu.
const REPO = 'https://github.com/isnaini75-star/uts-paw'

export default function Tentang() {
  const { nama, nim, kelas, tema } = mahasiswa
  return (
    <section>
      <h1>Tentang</h1>
      <dl>
        <dt>ISNAINI FEBRIANA</dt>
        <dd>{nama}</dd>
        <dt>124140075</dt>
        <dd>{nim}</dd>
        <dt>RB</dt>
        <dd>{kelas}</dd>
        <dt>Destinasi Wisata Lampung</dt>
        <dd>{tema}</dd>
      </dl>
      <p>
        Kode sumber: <a href={REPO}>{REPO}</a>
      </p>
    </section>
  )
}