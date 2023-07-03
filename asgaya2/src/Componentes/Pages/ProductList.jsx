import imgprado from '../../Assets/Frame15img-prado.png'
import './ProductList.css'

const ProductList = ({mapeoProducts}) => {
    
    return (
    <body>
        <img src={imgprado} alt='imgprado' className='imgprado'/>
        <div>
            <ul>{mapeoProducts}</ul>
        </div> 
    </body>

    )
}

export default ProductList