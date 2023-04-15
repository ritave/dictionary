import { Link } from "./Link";
const definitions = {
  "permissionless distribution": {
    phonetic: "pɝˈmɪʃənˈɫɛs ˌdɪstɹəbˈjuʃən",
    description: (
      <>
        <Link to="distribution">distribution</Link> is said to be{" "}
        <Link to="permissionless">permissionless</Link> when each actor
        maintains <Link to="sovereignty">sovereignty</Link> over the ability of{" "}
        <Link to="publishing">publishing</Link> a new medium and delivery of any{" "}
        <Link to="publishing">published</Link> medium to the consumer
      </>
    ),
  },
  distribution: {
    phonetic: "ˌdɪstɹəbˈjuʃən",
    partOfSpeech: "noun",
    description: (
      <>
        process of delivering a <Link to="publishing">published</Link> medium to
        a consumer
      </>
    ),
  },
  publishing: {
    phonetic: "ˈpəbɫɪʃɪŋ",
    partOfSpeech: "noun",
    description: <>process of making a medium available to the public</>,
  },
  permissionless: {
    phonetic: "pɝˈmɪʃənˈɫɛs",
    partOfSpeech: "adjective",
    description: (
      <>
        description of a system in which participant maintains{" "}
        <Link to="equality">equal</Link>{" "}
        <Link to="sovereignty">sovereignty</Link> over the defined scope of the
        system.
      </>
    ),
  },
  sovereignty: {
    phonetic: "ˈsɑvɹənti",
    partOfSpeech: "noun",
    description: (
      <>
        supreme power over a scope that can be exercised without any external
        restrictions being possible
      </>
    ),
  },
  equality: {
    phonetic: "ɪˈkwɑɫəti",
    partOfSpeech: "noun",
    description: (
      <>
        state of a system in which every actor has exactly the same rights and
        responsibilities
      </>
    ),
  },
};

export default definitions;
