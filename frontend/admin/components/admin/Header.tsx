"use client"
import AddFormModal from '@/app/(admin)/admin/_components/AddFormModal';
import { useToggle } from '@/context/ToggleContext';
import { LogoutOutlined, PoweroffOutlined } from '@ant-design/icons'
import { App, Button, Dropdown, MenuProps, message } from 'antd'
import React from 'react'
import { IoAddOutline } from 'react-icons/io5';

const handleMenuClick: MenuProps['onClick'] = (e) => {
  message.success('Successfully logged out');
};

const items: MenuProps['items'] = [
  {
    label: 'Logout',
    key: 'logout',
    icon: <PoweroffOutlined />,
  },
];

const menuProps = {
  items,
  onClick: handleMenuClick,
};

const HeaderComponent = () => {
  const { toggleState } = useToggle();
  
  return (
    <div className='flex justify-center md:justify-between items-center gap-5'>
      <Button onClick={() => toggleState() } shape='round' icon={<IoAddOutline />} >Add Product</Button>
      <AddFormModal />
      <div className='whitespace-nowrap'>
        <span className='sm:text-sx lg:text-lg md:font-bold mr-2'>Itumeleng&apos;s Dinner</span>
        <Dropdown  menu={menuProps}>
          <Button shape='round' icon={<LogoutOutlined />} />
        </Dropdown>
      </div>
    </div>
  )
}

export default HeaderComponent