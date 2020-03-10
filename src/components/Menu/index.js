import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Container,Logo,Content,List as ListMenu,Button } from './styles';
import Hidden from '@material-ui/core/Hidden';
import { GiHamburgerMenu } from 'react-icons/gi';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function Menu() {
    const [mobileMenu,setMobileMenu] = useState(false);

    function toogleMobileMenu()
    {
        setMobileMenu(!mobileMenu);
        console.log(mobileMenu)
    }

    function sideList()
    {
        return (
          <List>
            {['Home', 'About', 'Shop', 'Contact'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        )
    }
        
    
    
    return (
        <Container>
            <Content>
                <Logo xs={12} md={3} sm={3} >Your Logo</Logo>
                <Hidden only={'xs'}>
                    <ListMenu  md={6} sm={6}>
                        <ul>
                        <Link><li>Home</li></Link>
                        <Link><li>About</li></Link>
                        <Link><li>Shop</li></Link>
                        <Link><li>Contact</li></Link>
                        </ul>
                    </ListMenu>
                </Hidden>
                <Hidden smUp>
                    <ListMenu xs={12} >
                        <button onClick={toogleMobileMenu}>
                            <GiHamburgerMenu color="#808080" size={20} />
                        </button>
                       <Drawer  open={mobileMenu} ls={toogleMobileMenu}  anchor="right">
                        {sideList('right')}
                       </Drawer>
                    </ListMenu>
                </Hidden>
                <Button xs={3} md={3} sm={3} >
                    <button>
                        Blog
                    </button>
                </Button>
            </Content>
        </Container>
  );
}
