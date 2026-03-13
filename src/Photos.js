import UN from './1.jpg';
import DEUX from './2.jpg';
import TROIS from './3.jpg';


function Photos() {
  return (
    <div>
        <p>Voici quelques photos :</p>
      <img src={UN} alt="Photo 1" width={300} />
      <img src={DEUX} alt="Photo 2" width={300} />
      <img src={TROIS} alt="Photo 3" width={300} /> 
    </div>
  );
}

export default Photos;