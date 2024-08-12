import { PageSection } from '../components';

const ImageTransitionSection = () => {
    return (
      <PageSection maxWidth="1120px" bgColor={["33%", "#04182B", "#ffffff"]}>
        <img src="./imgs/dashboard-app.png" alt="placeholder" style={{width: "85%", height: "auto", borderRadius: "0.7rem"}} />
      </PageSection>
    )
}

export default ImageTransitionSection;