export default function Loader(): JSX.Element {
  return (
    <div className="cities__places-container cities__places-container--empty container">
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">Loading...</b>
        </div>
      </section>
      <div className="cities__right-section"></div>
    </div>
  );
}
