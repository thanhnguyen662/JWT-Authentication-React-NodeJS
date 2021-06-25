import { Col, Layout, Row } from 'antd';
import React from 'react';
import ProfileInfoCard from '../ProfileInfoCard';
import ProfileRelationCard from '../ProfileRelationCard';
import { useSelector } from 'react-redux';

const { Content } = Layout;

function ProfileForm(props) {
   const email = useSelector((state) => state.users.email);
   return (
      <>
         <Content style={{ margin: '0 16px' }}>
            <div style={{ paddingTop: 24, minHeight: 360 }}>
               <Row gutter={[24, 0]}>
                  <Col span={8}>
                     <ProfileInfoCard email={email} />
                  </Col>
                  <Col flex='auto'>
                     <ProfileRelationCard />
                  </Col>
               </Row>
            </div>
         </Content>
      </>
   );
}

export default ProfileForm;
