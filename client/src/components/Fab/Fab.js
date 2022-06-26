import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import AddIcon from '@material-ui/icons/Add';
import CreateIcon from '@material-ui/icons/Create';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AddClient from '../Clients/AddClient';
import AddProduct from '../Products/AddProduct';
import PostAddIcon from '@material-ui/icons/PostAdd';


const FabButton = () => {

  const location = useLocation()
	const [currentId, setCurrentId] = useState(null);
  const mainButtonStyles = {backgroundColor: '#1976D2'}
  const [openClientModal, setOpenClientModal] = useState(false)
  const [openProductModal, setOpenProductModal] = useState(false)


  // if(location.pathname === '/invoice') return null

    return (
        <div>
           <AddClient setOpen={setOpenClientModal} open={openClientModal} />
           <AddProduct setOpen={setOpenProductModal} open={openProductModal} currentId={currentId} setCurrentId={setCurrentId}/>
          <Fab
            mainButtonStyles={mainButtonStyles}
            icon={ <AddIcon />}
            alwaysShowTitle={true}
          >

            {location.pathname !== '/invoice' && (
              <Action
                  text="New Invoice"
                  // onClick={() =>  history.push(`/invoice`)}
                  onClick={() => window.location.href='/invoice'}
                >
                  <CreateIcon />
              </Action>
            )}

            <Action
                text="New Product"
                onClick={() => setOpenProductModal((prev) => !prev)}
              >
                <PostAddIcon />
            </Action>
            <Action
                text="New Customer"
                onClick={() => setOpenClientModal((prev) => !prev)}
              >
                <PersonAddIcon />
            </Action>


          </Fab>
        </div>
    )
}

export default FabButton
