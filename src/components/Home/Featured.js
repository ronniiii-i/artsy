import { FiArrowRight } from 'react-icons/fi'
import fp from '../../assets/images/fp.png'
import fp2 from '../../assets/images/fp2.png'
import fp3 from '../../assets/images/fp3.png'
import creators from '../../assets/images/creators.png'

function Featured() {
    return (
        <section id="featured">
            <h3>Featured Products</h3>
            <hr />
            <div className="products flex align-center justify-between full-width">
                <div className="image">
                    <img src={fp} alt="Featured Product" />
                </div>
                <div className="text">
                    <h4>The Boolean Egyptian</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur
                    </p>
                    <div className="bottom flex full-width align-center">
                        <img src={creators} alt="creators" />
                        <p>64 major creators</p>
                        <FiArrowRight />
                    </div>
                </div>
            </div>
            <hr />
            <div className="products flex align-center justify-between full-width">
                <div className="image">
                    <img src={fp2} alt="Featured Product" />
                </div>
                <div className="text">
                    <h4>The Boolean Egyptian</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur
                    </p>
                    <div className="bottom flex full-width align-center">
                        <img src={creators} alt="creators" />
                        <p>64 major creators</p>
                        <FiArrowRight />
                    </div>
                </div>
            </div>
            <hr />
            <div className="products flex align-center justify-between full-width">
                <div className="image">
                    <img src={fp3} alt="Featured Product" />
                </div>
                <div className="text">
                    <h4>The Boolean Egyptian</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur
                    </p>
                    <div className="bottom flex full-width align-center">
                        <img src={creators} alt="creators" />
                        <p>64 major creators</p>
                        <FiArrowRight />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Featured