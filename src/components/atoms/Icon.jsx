import Image from 'next/image';

const Icon = ({ name, type }) => (
  <Image
    src={`/assets/icons/${name}.${type ? type : 'svg'}`}
    alt={name}
    width={40}
    height={40}
  />
);

export default Icon;
