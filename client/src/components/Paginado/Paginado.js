import style from './Paginado.module.css'
const Paginado = ({totalPages,paginado,next,prev,currentPage})=>{
    const pageNumbers = []
    var estadoPrev = false;
    var estadoNext = false;
    for(let i = 1;i<= totalPages;i++){
        pageNumbers.push(i)
    }
    if(currentPage === 1){
        estadoPrev = true
    }else if(currentPage === totalPages){
        estadoNext = true
    }
    return (
        <nav>
            
           
            <ul className={style.lista}>
                <li className={style.elemento}>{totalPages > 1 && <button className={style.other}  disabled={estadoPrev} onClick={prev} >Prev</button> }</li>
                {
                    pageNumbers &&
                    pageNumbers.map((num,i) => <li className={style.elemento}  key={i}><button id={i+1 === currentPage? style.es : undefined} className={style.button}  onClick={()=> paginado(num)}>{num}</button></li>)
                }
                <li className={style.elemento}>{totalPages > 1 && <button className={style.other} disabled={estadoNext} onClick={next} >Next</button> }</li>
            </ul>
            
        </nav>
    )
}
export default Paginado;