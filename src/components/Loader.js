import spinner from './preloader.gif'

const Loader = () => {
    return (
        <div className ="loader" >
            <img src={spinner} alt ="Loading" />
            
        </div>
    )
}

export default Loader
