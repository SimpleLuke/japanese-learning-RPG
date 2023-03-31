const CharacterComponent = ({data}) => {
  const { body, hair, top, bottoms, shoes } = data;

  return (
    <>
    <div className={`${body}`} data-test="character-body">
      <div className={`${hair}`} data-test="character-hair">
        <div className={`${top}`} data-test="character-top">
          <div className={`${bottoms}`} data-test="character-bottoms">
            <div className={`${shoes}`} data-test="character-shoes"></div>
          </div>
        </div>
      </div>
    </div>    
    </>
  );
};

export default CharacterComponent;