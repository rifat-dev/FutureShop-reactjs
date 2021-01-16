import { useState } from 'react'
import {connect } from 'react-redux'
import { Sidebar, Icon, Item, Logo, LogoText } from 'react-sidebar-ui'
import { Link } from 'react-router-dom'
import Switch from '@material-ui/core/Switch';
import Badge from '@material-ui/core/Badge';
import LocalGroceryStoreOutlinedIcon from '@material-ui/icons/LocalGroceryStoreOutlined';
import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import StoreIcon from '@material-ui/icons/Store';
import DescriptionIcon from '@material-ui/icons/Description';
import ContactsIcon from '@material-ui/icons/Contacts';
import ChartModal from '../models/ChartModal'


const SideNavBar = (props) => {
    const [darkMode, darkModeSet] = useState(true)
    const [modalIsOpen,setIsOpen] = useState(false);

    const handleChange = e => {
        darkModeSet(e.target.checked);
    }

    function openModal() {
        setIsOpen(true);
      }
    
    
      function closeModal(){
        setIsOpen(false);
      }

      console.log(props.productBasket)

    return (
        <div>
            <Sidebar bgColor={darkMode ? 'black' : '#E84F55'} isCollapsed={false}>
                <Logo
                    image='https://media2.giphy.com/media/eNAsjO55tPbgaor7ma/source.gif'
                    imageName='react logo' />
                <LogoText>Future<span style={{ color: 'red' }} >Shop</span> </LogoText>

                <Item bgColor={darkMode ? 'black' : '#E84F55' } >
                   <Icon>
                   <Switch
                        checked={darkMode}
                        onChange={handleChange}
                        name="darkMode"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                   </Icon>
                   
                   <p>Dark Mode</p>
                </Item>


                <Link style={{ color: 'white', textDecoration: 'none' }} to='/'>
                <Item bgColor={darkMode ? 'black' : '#E84F55' }>
                   
                        <Icon><HomeOutlinedIcon/></Icon>
                         Home            
                </Item>
                </Link>
                

                <Link style={{ color: 'white', textDecoration: 'none' }} to='/products' >
                <Item bgColor={darkMode ? 'black' : '#E84F55' }>                  
                     <Icon><StoreIcon/></Icon>
                     Products                 
                </Item>
                </Link>

                <Link style={{ color: 'white', textDecoration: 'none' }} to='/blogs' >
                <Item bgColor={darkMode ? 'black' : '#E84F55' }>
                    <Icon><DescriptionIcon/></Icon>
                    Blogs
                </Item>
                </Link>

                <Link style={{ color: 'white', textDecoration: 'none' }} to='/contact' >
                <Item bgColor={darkMode ? 'black' : '#E84F55'}>    
                     <Icon><ContactsIcon /></Icon>
                     Contacts
                </Item>
                </Link>

                <Link style={{ color: 'white', textDecoration: 'none' }} to='/checkout' >
                <Item bgColor={darkMode ? 'black' : '#E84F55'}>
                    <Icon><PaymentOutlinedIcon/></Icon>
                    Checkout
                </Item>
                </Link>


                <Link style={{ color: 'white', textDecoration: 'none' }} to='/cart' >
                <Item
                 bgColor={darkMode ? 'black' : '#E84F55' }
                 onClick={openModal}
                 
                 >
                    <Icon>
                        <Badge badgeContent={props.productBasket.totalProduct} color="secondary">
                            <LocalGroceryStoreOutlinedIcon />
                        </Badge>
                    </Icon>
                    Cart
                </Item>
                </Link>
            </Sidebar>
        </div>
    );
}


const mapToStateFromProps = state => ({
    productBasket:state.productBasket
})
export default connect(mapToStateFromProps)(SideNavBar);
