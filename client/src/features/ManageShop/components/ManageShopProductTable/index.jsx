import React from 'react';
import PropTypes from 'prop-types';
import { Table, Image } from 'antd';
import priceFormat from '../../../../utils/PriceFormat';
import './ManageShopProductTable.scss';

ManageShopProductTable.propTypes = {
   myProduct: PropTypes.array,
};

ManageShopProductTable.defaultProps = {
   myProduct: [],
};

function ManageShopProductTable(props) {
   const { myProduct } = props;

   const columns = [
      {
         title: 'Image',
         dataIndex: ['productPhotoURL'],
         width: 80,
         render: (record) => (
            <Image src={record[0]} width={80} style={{ minHeight: 80 }} />
         ),
      },
      {
         title: 'Name',
         dataIndex: ['name'],
         key: 'name',
      },
      {
         title: 'Brand',
         dataIndex: ['brand'],
         key: 'brand',
      },
      {
         title: 'Price',
         dataIndex: ['price'],
         key: 'price',
         render: (record) => <div>{priceFormat(record)}</div>,
      },
      {
         title: 'Stock',
         dataIndex: ['stock'],
         key: 'stock',
      },
   ];

   return (
      <div className='manageShopProductTable'>
         <Table
            className='shopProductTable'
            dataSource={myProduct}
            columns={columns}
            ellipsis={true}
            pagination={false}
            rowKey={(record) => record.id}
         />
      </div>
   );
}

export default ManageShopProductTable;
