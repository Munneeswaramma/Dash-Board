import React from 'react';
import {
  FaStore,
  FaThList,
  FaBoxOpen,
  FaHeart,
  FaShoppingCart,
  FaComments,
  FaCommentDots,
  FaQuestionCircle,
  FaCog,
  FaHistory,
} from 'react-icons/fa';


const Sidebar = ({ setActiveSection, activeSection }) => {


  const handleItemClick = (sectionName) => {
   
    setActiveSection(sectionName);
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <img src="/latest logo.png" alt="Logo" className="logo-img" />
      </div>
      <ul className="menu">
        {
        }
        <li
          onClick={() => handleItemClick('market')}
          className={activeSection === 'market' ? 'active-sidebar-item' : ''}
        >
          <FaStore className="icon" /> Market
        </li>
        <li
          onClick={() => handleItemClick('categories')}
          className={activeSection === 'categories' ? 'active-sidebar-item' : ''}
        >
          <FaThList className="icon" /> Categories
        </li>
        <li
          onClick={() => handleItemClick('order')}
          className={activeSection === 'order' ? 'active-sidebar-item' : ''}
        >
          <FaBoxOpen className="icon" /> Order
        </li>
        <li
          onClick={() => handleItemClick('orderHistory')}
          className={activeSection === 'orderHistory' ? 'active-sidebar-item' : ''}
        >
          <FaHistory className="icon"/>Order History
        </li>
        <li
          onClick={() => handleItemClick('favorites')}
          className={activeSection === 'favorites' ? 'active-sidebar-item' : ''}
        >
          <FaHeart className="icon" /> Favorites
        </li>
        <li
          onClick={() => handleItemClick('cart')}
          className={activeSection === 'cart' ? 'active-sidebar-item' : ''}
        >
          <FaShoppingCart className="icon" /> Cart
        </li>
        <li
          className={`with-notification ${activeSection === 'message' ? 'active-sidebar-item' : ''}`}
          onClick={() => handleItemClick('message')}
        >
          <FaComments className="icon" /> Message
          <span className="notification-dot"  ></span>
        </li>
        <li
          onClick={() => handleItemClick('feedback')}
          className={activeSection === 'feedback' ? 'active-sidebar-item' : ''}
        >
          <FaCommentDots className="icon" /> Feedback
        </li>
        <li
          onClick={() => handleItemClick('help')}
          className={activeSection === 'help' ? 'active-sidebar-item' : ''}
        >
          <FaQuestionCircle className="icon" /> Help
        </li>
        <li
          onClick={() => handleItemClick('settings')}
          className={activeSection === 'settings' ? 'active-sidebar-item' : ''}
        >
          <FaCog className="icon" /> Settings
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;