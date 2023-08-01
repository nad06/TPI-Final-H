import React from 'react'
import Head from 'next/head'

import Cabecera from '../components/cabecera'
import ListaVentas from '../components/lista-ventas'

const Ventas = (props) => {
  return (
    <>
      <div className="w-full">
        <Head>
          <title>Ventas - Pedro's Bar</title>
          <meta property="og:title" content="Ventas - TPI - Frontend" />
        </Head>
        <Cabecera rootClassName="cabecera-root-class-name1"></Cabecera>
        <ListaVentas rootClassName="lista-ventas-root-class-name"></ListaVentas>
      </div>

    </>
  )
}

export default Ventas
