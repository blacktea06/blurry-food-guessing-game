function Card(props){

  return(

    <div

      className="card-container"

      onClick={() => props.setIsFlipped(!props.isFlipped)}

    >

      <div

        className={`card-inner ${props.isFlipped ? "flipped" : ""}`}

      >

        {/* FRONT */}

        <div
            className="card-front"

            style={{
                backgroundImage: `url("${props.cardBackground}")`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >

          <h2>What is this?</h2>

          <img

            className="blurred-image"

            src={props.card.img}

            alt={props.card.name}

          />

        </div>



        {/* BACK */}

        <div
            className="card-back"

            style={{
                backgroundImage: `url("${props.cardBackground}")`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >

          <h2>{props.card.name}</h2>

          <img

            className="food-image"

            src={props.card.img}

            alt={props.card.name}

          />

        </div>

      </div>

    </div>

  )

}

export default Card;