import { HomeOutlined, PictureOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Col, Menu, Row, Space } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import './SocialUserMenu.scss';

SocialUserMenu.propTypes = {
   photoURL: PropTypes.string,
   userName: PropTypes.string,
   name: PropTypes.string,
   handleChangeMenuSelected: PropTypes.func,
};

SocialUserMenu.defaultProps = {
   photoURL: '',
   userName: '',
   name: '',
   handleChangeMenuSelected: null,
};

function SocialUserMenu(props) {
   const { photoURL, userName, name, handleChangeMenuSelected } = props;

   return (
      <div className='socialUserMenu'>
         <Space direction='vertical' size={25}>
            <div className='socialUserCard'>
               <Space size={10} direction='vertical'>
                  <Avatar src={photoURL} size={60} />
                  <div>
                     <div className='name'>{name}</div>
                     <div className='userName'>{userName}</div>
                  </div>
                  <div className='stats'>
                     <Row span={24} gutter={[20, 0]}>
                        <Col span={8}>
                           <div className='number'>5/5</div>
                           <div className='title'>RATE</div>
                        </Col>
                        <Col span={8}>
                           <div className='number'>342</div>
                           <div className='title'>POSTS</div>
                        </Col>
                        <Col span={8}>
                           <div className='number'>123</div>
                           <div className='title'>COMMENT</div>
                        </Col>
                     </Row>
                  </div>
               </Space>
            </div>
            <div className='socialMenuCard'>
               <Menu
                  defaultSelectedKeys={['feed']}
                  className='menu'
                  onSelect={(value) => handleChangeMenuSelected(value)}
               >
                  <Menu.Item
                     key='feed'
                     icon={<HomeOutlined className='menuIcon' />}
                  >
                     New feed
                  </Menu.Item>
                  <Menu.Item
                     key='images'
                     icon={<PictureOutlined className='menuIcon' />}
                  >
                     Images
                  </Menu.Item>

                  <Menu.Item
                     key='profile'
                     icon={<UserOutlined className='menuIcon' />}
                  >
                     Profile
                  </Menu.Item>
               </Menu>
            </div>
         </Space>
      </div>
   );
}

export default SocialUserMenu;