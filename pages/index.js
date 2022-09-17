import Head from 'next/head'
import Image from 'next/image'
import SearchAppBar from '../src/components/SearchAppBar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <SearchAppBar/>
      <h1>パラノイアリブーテッド用キャラクターシート作成サイト</h1>
    </div>
  )
}
