import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Container,Logo,Content,List,Button } from './styles';
import Hidden from '@material-ui/core/Hidden';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Menu() {
    const [mobileMenu,setMobileMenu] = useState(false);

    function toogleMobileMenu()
    {
        setMobileMenu(!mobileMenu);
    }

    return (
        <Container>
            <Content>
                <Logo xs={12} md={3} sm={3} >Your Logo</Logo>
                <Hidden only={'xs'}>
                    <List  md={6} sm={6}>
                        <ul>
                        <Link><li>Home</li></Link>
                        <Link><li>About</li></Link>
                        <Link><li>Shop</li></Link>
                        <Link><li>Contact</li></Link>
                        </ul>
                    </List>
                </Hidden>
                <Hidden smUp>
                    <List xs={12} hamburguer>
                        <button onClick={toogleMobileMenu}>
                            <GiHamburgerMenu color="#808080" size={20} />
                        </button>
                        {mobileMenu && (<ul>
                        <Link><li>Home</li></Link>
                        <Link><li>About</li></Link>
                        <Link><li>Shop</li></Link>
                        <Link><li>Contact</li></Link>
                        </ul>)}
                    </List>
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
