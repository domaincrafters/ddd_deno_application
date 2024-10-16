import scanner from "@sonarqube/sonarqube";
scanner(
  {
    serverUrl: "https://sonarqube.ti.howest.be/",
    options: {
      "sonar.token": Deno.env.get("SONARQUBE_TOKEN"),
      "sonar.host.url": "https://sonarcloud.io/",
      "sonar.projectKey": "domaincrafters.deno.application",
      "sonar.projectName": "domaincrafters.deno.application",
      "sonar.organization": "domaincrafters",
      "sonar.newCodePeriod": "previous_version",
      "sonar.qualitygate": "DDD",
      "sonar.sources": "src",
      "sonar.tests": "tests"
    },
  },
  (error: unknown) => {
    if (error) {
      console.error("SonarQube analysis failed:", error);
      Deno.exit(1);
    } else {
      console.log("SonarQube analysis is complete");
    }
  }
);