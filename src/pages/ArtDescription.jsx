import { useParams } from 'react-router-dom';
import { allLists } from '../data/list';
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Tabs,
  Tab,
} from '@nextui-org/react';

const getArtItemById = (id) => {
  for (const listKey in allLists) {
    if (Object.prototype.hasOwnProperty.call(allLists, listKey)) {
      const item = allLists[listKey].find((item) => item.id.toString() === id);
      if (item) return item;
    }
  }
  return null;
};

const FlagImage = ({ countryCode }) => {
  const flagSrc = countryCode
    ? `http://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCode}.svg`
    : '';
  return flagSrc ? (
    <Image
      alt={countryCode}
      src={flagSrc}
      width={24}
      height={16}
      objectFit="cover"
      className="ml-2"
    />
  ) : null;
};

const ArtInfo = ({ artItem }) => (
  <Card className="shadow-xl rounded-lg">
    <CardHeader className="mb-1 flex flex-col items-center text-center">
      <h2 className="text-3xl font-bold text-gray-800">{artItem.name}</h2>
      <p className="text-sm text-gray-600 mt-1">by {artItem.artistInfo.name}</p>
    </CardHeader>
    <CardBody className="space-y-4">
      <p className="text-gray-700">{artItem.description}</p>
      <p>
        <span className="font-semibold">Year: </span>
        {artItem.date}
      </p>
      <p>
        <span className="font-semibold">Style: </span>
        {artItem.style}
      </p>
      <p>
        <span className="font-semibold">Dimensions: </span>
        {artItem.dimensions}
      </p>
      <p>
        <span className="font-semibold">Location: </span>
        {artItem.location}
        <span style={{ display: 'inline-flex', alignItems: 'center' }}>
          <FlagImage countryCode={artItem.countryCode} />
        </span>
      </p>
    </CardBody>
  </Card>
);

const ArtistDetails = ({ artistInfo }) => (
  <Card className="shadow-xl rounded-lg">
    <CardHeader className="mb-1 flex flex-col items-center justify-center space-y-4">
      <Image
        src={artistInfo.imageUrl}
        alt={artistInfo.name}
        width={100}
        height={100}
        objectFit="cover"
        className="rounded-full"
      />
      <div>
        <h2 className="text-3xl font-bold text-gray-800">{artistInfo.name}</h2>
        <div className="flex items-center justify-center">
          {artistInfo.nationality}
          <FlagImage countryCode={artistInfo.countryCode} />
        </div>
      </div>
    </CardHeader>
    <CardBody className="space-y-4">
      <p className="text-gray-700">{artistInfo.bio}</p>
      <p>
        <span className="font-semibold">Birth Year: </span>
        {artistInfo.birthYear}
      </p>
      {artistInfo.deathYear && (
        <p>
          <span className="font-semibold">Death Year: </span>
          {artistInfo.deathYear}
        </p>
      )}
      <p>
        <span className="font-semibold">Notable Works: </span>
        {artistInfo.notableWorks.join(', ')}
      </p>
    </CardBody>
  </Card>
);

const ArtDescription = () => {
  const { id } = useParams();
  const artItem = getArtItemById(id);

  if (!artItem) {
    return <div className="text-xl font-bold p-4">Artwork not found</div>;
  }
  return (
    <div className="flex flex-col md:flex-row p-4 gap-6">
      <div className="flex-1">
        <Image
          src={artItem.img}
          alt={artItem.name}
          objectFit="cover"
          width="100%"
          height="100%"
          className="shadow-lg rounded-lg"
        />
      </div>
      <div className="flex-1">
        <Tabs aria-label="Options">
          <Tab key="Art" title="Art Info">
            <ArtInfo artItem={artItem} />
          </Tab>
          <Tab key="Artist" title="Artist Info">
            <ArtistDetails artistInfo={artItem.artistInfo} />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default ArtDescription;
