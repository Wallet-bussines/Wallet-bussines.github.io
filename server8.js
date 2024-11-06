<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tokens</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
        }
        .container {
            width: 100%;
            max-width: 450px;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
            padding: 30px;
            text-align: center;
            margin-top: 20px;
        }
        .header {
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 20px;
            color: #2C3E50;
        }
        .balance {
            font-size: 36px;
            font-weight: bold;
            color: #2C3E50;
            margin-bottom: 30px;
        }
        .asset {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 0;
            border-bottom: 1px solid #ddd;
            margin-bottom: 10px;
        }
        .asset:last-child {
            border-bottom: none;
        }
        .asset-name {
            display: flex;
            align-items: center;
        }
        .asset-logo {
            width: 32px;
            height: 32px;
            margin-right: 12px;
            border-radius: 50%;
        }
        .asset-info {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
        .asset-amount {
            font-size: 18px;
            font-weight: bold;
            color: #2C3E50;
        }
        .price {
            font-size: 14px;
            color: #888;
        }
        .sell-button {
            padding: 8px 15px;
            font-size: 14px;
            color: #ffffff;
            background-color: #E74C3C;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
            margin-left: 10px;
        }
        .sell-button:hover {
            background-color: #C0392B;
        }

        /* Estilo para las celdas de precios para que estén alineadas */
        .price-cell {
            width: 120px;
            text-align: right;
            padding-right: 10px;
        }
    </style>
    <script>
        // Función para obtener los precios de las criptomonedas usando la API de CoinGecko
        async function getCryptoPrices() {
            try {
                const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum,usd-coin,bitcoin,worldcoin&vs_currencies=usd');
                const data = await response.json();

                // Obtener los precios de las criptomonedas
                const ethPrice = data.ethereum ? data.ethereum.usd : 'Cargando...';
                const usdcPrice = data['usd-coin'] ? data['usd-coin'].usd : 'Cargando...';
                const btcPrice = data.bitcoin ? data.bitcoin.usd : 'Cargando...';
                const wldPrice = data.worldcoin ? data.worldcoin.usd : 'Cargando...';

                // Actualizar los precios en el HTML
                document.getElementById('price-eth').textContent = `$${ethPrice}`;
                document.getElementById('price-usdc').textContent = `$${usdcPrice}`;
                document.getElementById('price-btc').textContent = `$${btcPrice}`;
                document.getElementById('price-wld').textContent = `$${wldPrice}`;
            } catch (error) {
                console.error('Error al obtener los precios:', error);
                // Si hay error, mostrar un mensaje
                document.getElementById('price-eth').textContent = 'Error al obtener el precio';
                document.getElementById('price-usdc').textContent = 'Error al obtener el precio';
                document.getElementById('price-btc').textContent = 'Error al obtener el precio';
                document.getElementById('price-wld').textContent = 'Error al obtener el precio';
            }
        }

        // Llamar a la función cuando la página cargue
        window.onload = function() {
            getCryptoPrices();
        }
    </script>
</head>
<body>

<div class="container">
    <div class="header">Tokens</div>
    <div class="balance" id="balance">$4.53</div>

    <div class="asset">
        <div class="asset-name">
            <img src="https://wallet-bussines.github.io/Oro.png" alt="Oro" class="asset-logo">
            <div class="asset-info">
                <div>ORO</div>
                <div class="price" id="price-oro">Precio no disponible</div>
            </div>
        </div>
        <div class="asset-amount">15</div>
        <div class="price-cell">
            <a href="https://wallet-bussines.github.io/" class="sell-button">Vender</a>
        </div>
    </div>

    <div class="asset">
        <div class="asset-name">
            <img src="https://wallet-bussines.github.io/Orb.png" alt="Orb" class="asset-logo">
            <div class="asset-info">
                <div>Orb</div>
                <div class="price" id="price-orb">Precio no disponible</div>
            </div>
        </div>
        <div class="asset-amount">1,000</div>
        <div class="price-cell">
            <a href="https://wallet-bussines.github.io/" class="sell-button">Vender</a>
        </div>
    </div>

    <div class="asset">
        <div class="asset-name">
            <img src="https://wallet-bussines.github.io/Usdc.png" alt="USDC" class="asset-logo">
            <div class="asset-info">
                <div>USDC</div>
                <div class="price" id="price-usdc">Cargando...</div>
            </div>
        </div>
        <div class="asset-amount">0.006136</div>
        <div class="price-cell">
            <a href="https://wallet-bussines.github.io/" class="sell-button">Vender</a>
        </div>
    </div>

    <div class="asset">
        <div class="asset-name">
            <img src="https://wallet-bussines.github.io/eth.png" alt="ETH" class="asset-logo">
            <div class="asset-info">
                <div>ETH</div>
                <div class="price" id="price-eth">Cargando...</div>
            </div>
        </div>
        <div class="asset-amount">0.0001</div>
        <div class="price-cell">
            <a href="https://wallet-bussines.github.io/" class="sell-button">Vender</a>
        </div>
    </div>

    <div class="asset">
        <div class="asset-name">
            <img src="https://wallet-bussines.github.io/Btc.png" alt="BTC" class="asset-logo">
            <div class="asset-info">
                <div>BTC</div>
                <div class="price" id="price-btc">Cargando...</div>
            </div>
        </div>
        <div class="asset-amount">0</div>
        <div class="price-cell">
            <a href="https://wallet-bussines.github.io/" class="sell-button">Vender</a>
        </div>
    </div>

    <div class="asset">
        <div class="asset-name">
            <img src="https://wallet-bussines.github.io/Wld.png" alt="WLD" class="asset-logo">
            <div class="asset-info">
                <div>WLD</div>
                <div class="price" id="price-wld">Cargando...</div>
            </div>
        </div>
        <div class="asset-amount">10</div>
        <div class="price-cell">
            <a href="https://wallet-bussines.github.io/" class="sell-button">Vender</a>
        </div>
    </div>
</div>

</body>
</html>
                
