import "./OrganisationCard.scss";
import NorthEastIcon from '@mui/icons-material/NorthEast';

type OrganisationCardProps = {
  name: string,
  location: string,
  overview: string,
};


const OrganisationCard = ({name, location, overview} : OrganisationCardProps) => {

    const truncateDescription = () => {
        const words = overview.split(' ');
        if (words.length > 28) {
          return words.slice(0, 28).join(' ') + '...';
        }
        return overview;
    }

const className = `organisation-card`;
    return (
        <div className={className}>
        <div className="organisation-card__content">
            <h2 className="organisation-card__name">{name}</h2>
            <h3 className= "organisation-card__location">{location}</h3>    
            <p className="organisation-card__abrv-info">
                {truncateDescription()} 
                 __
                <NorthEastIcon fontSize="smaller" />
                </p>
                    
                      
    
        </div>
      </div>
    );

};

export default OrganisationCard;