import mahasiswa from '../../mahasiswa.json'

// Ganti dengan alamat repo fork kamu.
const REPO = 'https://github.com/isnaini75-star/uts-paw'

export default function Tentang() {
  const { nama, nim, kelas, tema } = mahasiswa
  return (
    <section classname="tentang-container">
      <h1>About Me</h1>
      <dl>
        <dt>nama</dt>
        <dd>{nama}</dd>
        <dt>nim</dt>
        <dd>{nim}</dd>
        <dt>kelas</dt>
        <dd>{kelas}</dd>
        <dt>tema</dt>
        <dd>{tema}</dd>
      </dl>
      <p>
        Kode sumber: <a href={REPO}>{REPO}</a>
      </p>
    </section>
  )
}