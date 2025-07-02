import React, { useState, useEffect, useRef } from 'react';
import FilledCirclesDisplay from './FullCircleDisplay';
import {
  FaEnvelope,
  FaBell,
  FaCaretDown,
  FaSearch,
  FaCartPlus,
  FaFilter,
  FaHeart,
  FaCarrot,
  FaAppleAlt,
  FaTshirt,
  FaMobileAlt,
  FaBriefcase,
  FaBars,
} from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { RiUserSearchLine } from 'react-icons/ri';



const MainContent = ({ activeSection, setActiveSection, theme, toggleTheme, toggleSidebar }) => {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [currentPromoIndex, setCurrentPromoIndex] = useState(0);
  const [wishlist, setWishlist] = useState(new Set());
  const [cart, setCart] = useState({});

  const [showAllNotifications, setShowAllNotifications] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const contactMailRef = useRef(null);
  const notificationsRef = useRef(null);
  const profileRef = useRef(null);
  const handleDropdownToggle = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };
  const promoBanners = [
    {
      title: "Get All Special Discounts up to 45%",
      subtitle: "Enjoy our vegetables at discounted prices",
      img: "/page.png",
      cta: "USE NOW"
    },
    {
      title: "Fresh Fruits Offer - 30% OFF",
      subtitle: "Seasonal fruits just for you",
      img: "/fruits.jpg",
      cta: "SHOP NOW"
    },
    {
      title: "Fashion Sale - Up to 50% OFF",
      subtitle: "Latest trends at unbeatable prices",
      img: "/fashion.jpg",
      cta: "EXPLORE"
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromoIndex((prevIndex) =>
        (prevIndex + 1) % promoBanners.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [promoBanners.length]);

  const notifications = [
    { icon: '🔔', text: "New order received" },
    { icon: '📦', text: "Stock running low for Mobile" },
    { icon: '💰', text: "Price updated for T-Shirts" },
    { icon: '✉️', text: "New message from supplier" },
    { icon: '🚚', text: "Shipment delayed" },
  ];

  const orders = [
    { Name: "Ram", goods: "Fruit", status: "Accept" },
    { Name: "Geetha", goods: "Electronics", status: "Accept" },
    { Name: "Suvarana", goods: "Vegetables", status: "Accept" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDropdown) {
        let currentRef = null;
        switch (activeDropdown) {
          case 'contactMail': currentRef = contactMailRef; break;
          case 'notifications': currentRef = notificationsRef; break;
          case 'profile': currentRef = profileRef; break;
          default: break;
        }
        if (currentRef && currentRef.current && !currentRef.current.contains(event.target)) {
          setActiveDropdown(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);

  const categories = [
    { name: 'Vegetables', img: '/vegetables.png' },
    { name: 'Fruits', img: '/fruits.jpg' },
    { name: 'Fashion', img: '/fashion.jpg' },
    { name: 'Mobile', img: '/mobile.jpg' },
    { name: 'Office', img: '/office.webp' },
    { name: 'Computer', img: '/computer.webp' },
    { name: 'Daily Essentials', img: '/Daily essentials.jpg' },
    { name: 'Body & Skin Care', img: '/body and skin care.jpeg' },
  ];
  const visibleCategories = showAllCategories ? categories : categories.slice(0, 4);

  const stockItems = [
    { icon: <FaCarrot className="stock-icon" />, label: "Vegetables " },
    { icon: <FaAppleAlt className="stock-icon" />, label: "Fruits " },
    { icon: <FaTshirt className="stock-icon" />, label: "Fashion" },
    { icon: <FaMobileAlt className="stock-icon" />, label: "Mobile" },
    { icon: <FaBriefcase className="stock-icon" />, label: "Office" },
  ];

  const products = [
  { id: 1, img: '/apple.jpg', name: 'Red Apple', quantity: '10 kg', price: '₹80/kg' },
  { id: 2, img: '/carrot.jpg', name: 'Carrots', quantity: '5 kg', price: '₹50/kg' },
  { id: 3, img: '/tshirt.jpg', name: 'T-Shirt', quantity: '1', price: '₹399' },
  { id: 4, img: '/phone.jpg', name: 'Smartphone', quantity: '1', price: '₹12,999' },
];

  const visibleProducts = showAllProducts ? products : products.slice(0, 3);
  const toggleWishlist = (productId) => {
  setWishlist(prev => {
    const newSet = new Set(prev);
    if (newSet.has(productId)) {
      newSet.delete(productId);
    } else {
      newSet.add(productId);
    }
    return newSet;
  });
};
const [isAdding, setIsAdding] = useState(false);

const handleAddToCart = (product) => {
  if (isAdding) return;
  setIsAdding(true);
  setCart(prev => {
    const updated = { ...prev };
    if (updated[product.id]) return prev;
    updated[product.id] = { quantity: 1, product };
    return updated;
  });
  setTimeout(() => setIsAdding(false), 200);
};






  return (
    <div className="container">
      { }
      <header className="main-header">
        {/* Hamburger Icon */}
        <FaBars
          onClick={toggleSidebar}
          style={{ cursor: 'pointer', fontSize: '24px' }}
          aria-label="Toggle Sidebar"
        />


        <div className="buy-sell">
          <span className="btn1">BUY</span>
          <span className="btn2">SELL</span>
        </div>

        <div className="contact-methods">
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn1"
            title="Chat on WhatsApp"
          >
            <FontAwesomeIcon icon={faSquareWhatsapp} />
          </a>
          <div className="icon-wrapper" ref={contactMailRef} onClick={() => handleDropdownToggle('contactMail')}>
            <a href="mailto:info@example.com" className="contact-btn2" title="Send Email" onClick={(e) => e.stopPropagation()}>
              <FaEnvelope />
            </a>
          </div>
        </div>

        <RiUserSearchLine className="inline-icon1" title="Search Users" />

        <div className="search-container">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search products..." />
        </div>

        {/* Theme Toggle Button - uses CSS variables for styling */}
        <button
          onClick={toggleTheme}
          style={{
            background: 'none',
            border: '1px solid var(--border-color)',
            borderRadius: '5px',
            padding: '8px 12px',
            cursor: 'pointer',
            marginLeft: '15px',
            fontWeight: 'bold',
            color: 'var(--text-primary)',
            backgroundColor: 'var(--secondary-bg)'
          }}
        >
          {theme === 'light' ? '🌙 ' : '☀️'}
        </button>

        <div className="icon-wrapper" ref={notificationsRef} onClick={() => handleDropdownToggle('notifications')}>
          <FaBell className="inline-icon" title="Notifications" />
          <span className="notification-badge">3</span>
          {activeDropdown === 'notifications' && (
            <div className="dropdown-content">
              {notifications.slice(0, 3).map((notif, index) => (
                <div key={index}>
                  {notif.icon} {notif.text}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="profile-dropdown" ref={profileRef} onClick={() => handleDropdownToggle('profile')}>
          <img src="https://i.pravatar.cc/30" alt="User" className="profile-pic" />
          <span className="profile-name">Munni</span>
          <FaCaretDown />
          {activeDropdown === 'profile' && (
            <div className="dropdown-content">
              <div>Profile</div>
              <div>Settings</div>
              <div>Logout</div>
            </div>
          )}
        </div>
      </header>

      <div className="content-wrapper" style={{ display: 'flex', gap: '10px' }}>
        <main className="main-content" style={{ flex: 1 }}>
          {activeSection === 'market' && (
            <>
              <section
                className="promo-banner-wrapper"
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '100%',
                  marginBottom: '20px',
                }}
              >
                <div
                  className="promo-banner page"

                  style={{
                    textAlign: 'center',
                    padding: '20px',
                    border: '1px solid var(--border-color)',
                    borderRadius: '10px',
                    backgroundColor: 'var(--promo-banner-bg)',
                    color: 'var(--promo-banner-text)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <div className="promo-text">
                    { }
                    <strong style={{ color: 'inherit' }}>{promoBanners[currentPromoIndex].title}</strong>
                    <p style={{ color: 'inherit' }}>{promoBanners[currentPromoIndex].subtitle}</p>
                  </div>
                  <img
                    src={promoBanners[currentPromoIndex].img}
                    alt={promoBanners[currentPromoIndex].title}
                    className="promo-image"
                    style={{
                      width: '100%',
                      maxHeight: '240px',
                      objectFit: 'cover',
                      borderRadius: '10px',
                      marginTop: '10px',
                    }}
                  />
                  <p
                    className="usenow"
                    style={{
                      cursor: 'pointer',
                      fontWeight: 'bold',
                      marginTop: '10px',
                      backgroundColor: 'white',
                      color: 'green',
                      padding: '6px 14px',
                      borderRadius: '6px',
                      display: 'inline-block',
                    }}
                  >
                    {promoBanners[currentPromoIndex].cta}
                  </p>
                </div>

                {/* Dot indicators */}
                <div
                  className="dots"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '10px',
                    marginTop: '15px',
                  }}
                >
                  {promoBanners.map((_, idx) => (
                    <span
                      key={idx}
                      onClick={() => setCurrentPromoIndex(idx)}
                      style={{
                        width: currentPromoIndex === idx ? '14px' : '10px',
                        height: currentPromoIndex === idx ? '14px' : '10px',
                        backgroundColor: currentPromoIndex === idx ? 'var(--text-primary)' : 'var(--border-color)', // Use theme colors
                        border: currentPromoIndex === idx ? '2px solid var(--primary-bg)' : '1px solid var(--text-secondary)', // Use theme colors
                        borderRadius: '50%',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                      }}
                    ></span>
                  ))}
                </div>
              </section>

              <section className="section">
                <div className="section-header">
                  <h2 style={{ fontWeight: 'bold' }}>Popular Categories</h2>
                  <button className="view-all" onClick={() => setShowAllCategories(!showAllCategories)}>
                    {showAllCategories ? 'View Less' : 'View All'}
                  </button>
                </div>
                <div className="card-grid">
                  {visibleCategories.map((cat, index) => (
                    <div className="card" key={index}> { }
                      <img src={cat.img} alt={cat.name} style={{ width: '100%', height: '100px', objectFit: 'cover' }} />
                      <p>{cat.name}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="section">
                <div className="section-header">
                  <h2 style={{ fontWeight: 'bold' }}>Categories & Stock</h2>
                </div>
                <div className="stock-card-grid">
                  {stockItems.map((item, idx) => (
                    <div className="card" key={idx}> { }
                      {item.icon}
                      <p>{item.label}</p>
                    </div>
                  ))}
                </div>
              </section>
<section className="section">
  <div className="section-header">
    <h2 style={{ fontWeight: 'bold' }}>Products</h2>
    <button className="view-all" onClick={() => setShowAllProducts(!showAllProducts)}>
      {showAllProducts ? 'View Less' : 'View All'}
    </button>
  </div>

  <div className="card-grid">
    {visibleProducts.map((prod) => (
      <div className="product-card" key={prod.id} style={{ position: 'relative' }}>
        {/* Wishlist Icon */}
        <button
          className="wishlist-btn"
          onClick={() => toggleWishlist(prod.id)}
          style={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: wishlist.has(prod.id) ? 'red' : '#aaa',
            fontSize: '1.2rem'
          }}
          title="Add to Wishlist"
        >
          <FaHeart />
        </button>

        <img
          src={prod.img}
          alt={prod.name}
          className="product-image"
          style={{ width: '100%', height: '120px', objectFit: 'cover' }}
        />
        <h4>{prod.name}</h4>
        <p>Quantity: {prod.quantity}</p>

        <div className="price-cart" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span>{prod.price}</span>

          {/* Cart Controls */}
          {!cart[prod.id] ? (
           <button 
  disabled={isAdding}
  onClick={() => handleAddToCart(prod)}
>
<FaCartPlus  style={{color:'green',border:'1 px solid green'}}/>
</button>

          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <button
                onClick={() => {
                  setCart(prev => {
                    const updated = { ...prev };
                    updated[prod.id].quantity -= 1;
                    if (updated[prod.id].quantity <= 0) {
                      delete updated[prod.id];
                    }
                    return updated;
                  });
                }}
                style={{
                  padding: '4px 8px',
                  background: '#eee',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                –
              </button>
              <span style={{ fontWeight: 'bold', minWidth: '20px', textAlign: 'center' }}>
                {cart[prod.id].quantity}
              </span>
              <button
                onClick={() => {
                  setCart(prev => {
                    const updated = { ...prev };
                    updated[prod.id].quantity += 1;
                    return updated;
                  });
                }}
                style={{
                  padding: '4px 8px',
                  background: '#eee',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
</section>



                  
            
            </>
          )}
        </main>

        { }
        <aside className="sidebar1" style={{ width: '320px', paddingLeft: '20px', position: 'sticky' }}>
          <h3>Income</h3>
          <div style={{ display: 'flex', gap: '10px' }}>
            <FilledCirclesDisplay />
          </div>
          {/* Notifications section */}
          <div style={{ marginTop: "30px" }}>
            <h5 style={{ fontWeight: 'bold' }}>Notifications</h5>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {(showAllNotifications ? notifications : notifications.slice(0, 3)).map(
                (notif, i) => (
                  <div
                    key={i}
                    style={{
                      borderRadius: "6px",
                      padding: "10px",
                      display: "flex",
                      alignItems: "center",
                      fontWeight: "300",
                      cursor: "default",
                      boxShadow: "0 1px 3px rgba(76,175,80,0.3)",

                      backgroundColor: 'var(--card-bg)',
                      color: 'var(--text-primary)',
                    }}
                  >
                    <span style={{ marginRight: "10px", fontSize: "20px" }}>
                      {notif.icon}
                    </span>
                    <span>{notif.text}</span>
                  </div>
                )
              )}
              <button
                onClick={() => setShowAllNotifications(!showAllNotifications)}
                style={{
                  marginTop: "10px",
                  background: "transparent",
                  border: "none",
                  color: "#4caf50",
                  cursor: "pointer",
                  fontWeight: "bold",
                  textAlign: "left",
                  padding: 0,
                }}
              >
                {showAllNotifications ? "Show Less ▲" : "Show More ▼"}
              </button>
            </div>
          </div>

          {}
          <section style={{ marginTop: "30px" }}>
            <h3 style={{ fontWeight: 'bold' }}>Latest Orders</h3>
            <table
              style={{
                width: "100%",
                borderCollapse: "separate",

                backgroundColor: 'var(--card-bg)',
                color: 'var(--text-primary)',
              }}
            >
              <thead>
                <tr style={{ color: 'var(--text-primary)' }}>
                  {/* Use theme text color for header */}
                  <th style={{ padding: "5px", textAlign: "left" }}>Name</th>
                  <th style={{ padding: "5px", textAlign: "left" }}>Goods</th>
                  <th style={{ padding: "5px" }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(({ Name, goods, status }, i) => (
                  <tr
                    key={i}
                    style={{
                      fontWeight: "200",
                      backgroundColor: i % 2 === 0 ? 'var(--row-even-bg)' : 'var(--row-odd-bg)',
                    }}
                  >
                    <td style={{ padding: "2px" }}>{Name}</td>
                    <td style={{ padding: "2px" }}>{goods}</td>
                    <td style={{ padding: "2px", textAlign: "center" }}>
                      {status === "Accept" ? (
                        <button
                          style={{
                            backgroundColor: "#4caf50",
                            color: "white",
                            border: "none",
                            padding: "6px 12px",
                            borderRadius: "4px",
                            cursor: "pointer",
                            fontWeight: "bold",
                          }}
                          onClick={() => alert(`Order for ${Name} accepted!`)}
                        >
                          Accept
                        </button>
                      ) : (
                        <span
                          style={{
                            color: "#2e7d32",
                            fontWeight: "bold",
                          }}
                        >
                          ✓ Accepted
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

        </aside>
      </div>
    </div>
  );
};

export default MainContent;