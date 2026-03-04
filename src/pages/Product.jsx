import React, { useState } from 'react'

const Product = () => {
  const [activeTab, setActiveTab] = useState('topup')

  const topUps = [
    { id: 1, name: 'Weekly Diamond...', publisher: 'Moontoon', image: 'https://via.placeholder.com/200x250?text=MLBB+Weekly' },
    { id: 2, name: 'Mobile Legends...', publisher: 'Moontoon', image: 'https://via.placeholder.com/200x250?text=MLBB+5v5' },
    { id: 3, name: 'Double Diamond...', publisher: 'Moontoon', image: 'https://via.placeholder.com/200x250?text=Double+Diamond' },
    { id: 4, name: 'Mobile Legends...', publisher: 'Moontoon', image: 'https://via.placeholder.com/200x250?text=MLBB+Promo' },
    { id: 5, name: 'Limited Elite B...', publisher: 'Moontoon', image: 'https://via.placeholder.com/200x250?text=Elite+Bundle' },
    { id: 6, name: 'Free Fire (Nepa...', publisher: 'Garena', image: 'https://via.placeholder.com/200x250?text=Free+Fire' },
    { id: 7, name: 'PUBG Mobile (GL...', publisher: 'TENCENT', image: 'https://via.placeholder.com/200x250?text=PUBG+Mobile' },
    { id: 8, name: 'ROBLOX', publisher: 'Roblox', image: 'https://via.placeholder.com/200x250?text=ROBLOX' },
    { id: 9, name: 'eFootball PES 2...', publisher: 'KONAMI', image: 'https://via.placeholder.com/200x250?text=eFootball' },
    { id: 10, name: 'Special Offer -...', publisher: 'Moontoon', image: 'https://via.placeholder.com/200x250?text=Special+Offer' },
    { id: 11, name: '(IOS Only) eF...', publisher: 'KONAMI', image: 'https://via.placeholder.com/200x250?text=eFootball+iOS' },
    { id: 12, name: 'Mobile Legends...', publisher: 'Moontoon', image: 'https://via.placeholder.com/200x250?text=MLBB+Indonesia' },
  ]

  const vouchers = [
    { id: 1, name: 'Discount Voucher 1', publisher: 'Online Sewa', image: 'https://via.placeholder.com/200x250?text=Voucher+1' },
    { id: 2, name: 'Discount Voucher 2', publisher: 'Online Sewa', image: 'https://via.placeholder.com/200x250?text=Voucher+2' },
  ]

  const giftCards = [
    { id: 1, name: 'Steam', publisher: 'Steam', image: 'https://via.placeholder.com/200x250?text=Steam' },
    { id: 2, name: 'iTunes Gift Card', publisher: 'Apple', image: 'https://via.placeholder.com/200x250?text=iTunes' },
  ]

  const subscriptions = [
    { id: 1, name: 'Monthly Pass', publisher: 'Online Sewa', image: 'https://via.placeholder.com/200x250?text=Monthly+Pass' },
  ]

  const tabs = [
    { id: 'topup', label: 'Top Up' },
    { id: 'voucher', label: 'Voucher' },
    { id: 'giftcard', label: 'Gift Card' },
    { id: 'subscription', label: 'Subscription' },
  ]

  const getProducts = () => {
    switch (activeTab) {
      case 'topup':
        return topUps
      case 'voucher':
        return vouchers
      case 'giftcard':
        return giftCards
      case 'subscription':
        return subscriptions
      default:
        return topUps
    }
  }

  return (
    <div className="bg-gray-900 min-h-screen text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Tab Navigation */}
        <div className="flex gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                activeTab === tab.id
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-700  text-gray-300 hover:bg-gray-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-6 gap-4">
          {getProducts().map((product) => (
            <div
              key={product.id}
              className="rounded-lg overflow-hidden cursor-pointer group bg-gray-800 hover:shadow-lg transition"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-3">
                <p className="text-sm font-semibold line-clamp-2 mb-1">{product.name}</p>
                <p className="text-xs text-gray-400">{product.publisher}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Product
