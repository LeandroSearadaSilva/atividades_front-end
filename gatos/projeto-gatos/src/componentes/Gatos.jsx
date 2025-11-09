import React, { useState, useEffect } from "react";

const urlGatos = "https://api.thecatapi.com/v1/images/search";

export function Gatos() {
  const [gatoData, setGatoData] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [recarregar, setRecarregar] = useState(0);

  const imagemGato = async () => {
    setCarregando(true);
    setErro(null);
    setGatoData(null);

    try {
      const response = await fetch(urlGatos);

      if (!response.ok) {
        throw new Error(`Erro de carregamento: ${response.status}`);
      }

      const data = await response.json();

      if (data && data.length > 0) {
        setGatoData(data[0]);
      } else {
        throw new Error("Sua imagem não pode ser caregada.");
      }
    } catch (e) {
      console.error("Detalhe do erro:", e);
      setErro("Erro ao carregar imagem. Tente  mais tarde.");
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    imagemGato();
  }, [recarregar]);

  const proxiGato = () => {
    setRecarregar((prevKey) => prevKey + 1);
  };

  if (carregando) {
    return <h2>Carregando...</h2>;
  }

  if (erro) {
    return (
      <div>
        <h2 style={{ color: "red" }}>{erro}</h2>
        <button onClick={proxiGato}>Tentar Novamente</button>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Gato sortido</h1>

      {}
      <img
        src={gatoData.url}
        alt="Imagem de gato"
        style={{
          maxWidth: "100%",
          height: "auto",
          width: gatoData.width ? `${gatoData.width}px` : "auto",
          height: gatoData.height ? `${gatoData.height}px` : "auto",
          display: "block",
          margin: "0 auto",
        }}
        width={gatoData.width}
        height={gatoData.height}
      />

      <button onClick={proxiGato} style={{ margin: "50px" }}>
        {" "}
        Próxima Imagem{" "}
      </button>
    </div>
  );
}
