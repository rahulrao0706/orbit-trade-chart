import { useSelector } from 'react-redux'
import { WalletCard, AddFiatCard } from '../WalletCard/WalletCard'
import './FiatWalletsSection.css'

const FiatWalletsSection = () => {
  const fiatWallets = useSelector((state) => state.wallet.fiatWallets)

  return (
    <section className="fiat-section">
      <h2 className="fiat-section__title">Fiat Wallets</h2>
      <div className="fiat-section__grid">
        {fiatWallets.map((wallet) => (
          <WalletCard key={wallet.id} wallet={wallet} />
        ))}
        <AddFiatCard />
      </div>
    </section>
  )
}

export default FiatWalletsSection
