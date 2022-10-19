import Carousel from './carousel';
import ResponsiveAppBar from './navBar';
import Card from './card';

const Main = () => {
    return (
        <div style={{ height:"100%"}}>
          <ResponsiveAppBar />
          <Carousel />
          <div style={{ paddingBottom:"80px" }}></div>
          <div style={{}}>
            <Card/>
          </div> 
          <div style={{ paddingBottom:"80px" }}></div>

        </div>
    )
}

export default Main