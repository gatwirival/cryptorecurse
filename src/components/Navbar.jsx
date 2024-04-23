import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container" style={{ padding: '10px 20px' }}>
      <div className="logo-container" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <Typography.Title level={3} className="logo" style={{ margin: 0 }}><Link to="/">Cryptorecurse</Link></Typography.Title>
        <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}><MenuOutlined /></Button>
      </div>
      {activeMenu && (
        <Menu theme="" style={{ width: '100%' }}>
          <Menu.Item icon={<HomeOutlined />}>
            <Link to="/" style={{ color: 'black' }}>Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <Link to="/cryptocurrencies" style={{ color: 'black' }}>Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />}>
            <Link to="/news" style={{ color: 'black' }}>News</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default Navbar;
