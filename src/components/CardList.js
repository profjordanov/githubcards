import Card from "./Card";

const CardList = ({profiles}) => (
    <div className="card-deck">
        {profiles.map(profile => <Card key={profile.id} profile={profile}/>)}
    </div>
);

export default CardList;