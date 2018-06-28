# greenci-sonar-plugin

This project is a sonar plugin made to display the energy spent by your project with an history. The plugin can allow you to detect an increase in energy consumption of your project and to be able to correct quickly.

# What does it do

1. Displays the total energy of all the tests in your project.
2. Displays the total energy of each test class, as well as each test method.
3. You can filter between each build / test of your project.

## REQUIREMENTS

You must install SonarQube : https://www.sonarqube.org/
This plugin work only with SonarQube 6.2 version or more.

Scan your project with maven and the plugin **[powerapi maven plugin](https://github.com/adrien1251/powerapiMavenPlugin)** 

## Installation

- Clone the repository of this Sonar plugin then `mvn clean install` and get the .jar in target repo
                                      OR
- Download the jar in release. 

- Put the .jar in your SonarQue folder, into /extensions/plugins . 

- Then you can start the Sonar server and go to your web explorer, consult the powerapi stat page

## Usage 

Scan your project one times with mvn sonar:sonar, then you can saw your project into sonar. 
To see the powerapi stat page, you need to scan your project with [powerapi maven plugin](https://github.com/adrien1251/powerapiMavenPlugin). 

## Context

This project was developed in the framework of a collaboration between Romain Rouvoy and Aurélien Bourdon from the INRIA Spirals team and Davidson SI Nord, to participate in the writing of the thesis of the apprentice researcher Chakib Belgaid.

## Authors

Adrien Deblock / Vincent Leclercq.
This project served as a mission to complete our end-of-study internship at Davidson Consulting.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

