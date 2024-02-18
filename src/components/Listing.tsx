import {List} from "./List"
interface TList {
  items: List[]
  }

export default function Listing({ items}: TList ) {
  let result: React.ReactNode;
    console.log(items)
    
  // eslint-disable-next-line prefer-const
  result = items.map((item) => {return (
        <div key={item.listing_id} className="item">
                <div className="item-image">
                    <a href={item.url}>
            <img src={item.MainImage?.url_570xN} />
                    </a>
                </div>
                <div className="item-details">
        <p className="item-title">{(item.title?.length >= 50) ? (item.title.substring(0, 49) + "...") : (item.title)}</p>
        <p className="item-price">{item.currency_code == "USD" ? "$" : item.currency_code == "EUR" ? "€" : ""}{item.price} {(item.currency_code == "GBP" || (item.currency_code !=="EUR" && item.currency_code!=="USD")) ? "GBP" : ""}</p>
        <p className={"item-quantity level-" + ((item.quantity > 20) ? "high" : (item.quantity<=10) ? "low" : "medium")}>{item.quantity} left</p>
                </div>
            </div>
        )})

  return <div className="item-list">
    {result}
  </div>;

}