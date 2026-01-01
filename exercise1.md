### Exercise 11.1

For this exercise, I will choose C++ as the language of choice, as I have recently played around with some microcontrollers (ESP32 to be specific) and the C++ toolchain is quite complex.

In my projects I came across clang-tidy, cppcheck and SonarLint for linting. In my experience linters can be a bit tricky to set up. First you hardly get anything, and then you tweak it and you suddenly have thousands of recommendations for the most minor details. In my project I found the free version of SonarLint to work quite well, and in a professional environment I would most likely lean towards this since there is a clear upgrade path to SonarQube.

In my projects, I did not set up any unit tests, so I do not have hands on experience. Some Googling tells me that [Unity](https://www.throwtheswitch.org/unity) and [GoogleTest](https://google.github.io/googletest/) would be my best options. Both look like viable options, and I would most likely go for Google Tests just out of curiosity.

For the build process, the choice would definitively be CMake. While I only dabble in this, it is my impression that this is the standard. There are tools that can do the build, but under the hood they often anyway use CMake. The actual toolchain would then depend on the project being built, but it would most likely involve (at least) xtensa‑esp32‑elf, binutils and esptool.py.


With MCU:s, it becomes interesting when you get to the deployment and testing, as you often want to include the hardware, and that is not possible in a cloud environment. For a large scale project with multiple developers, you would still use a central solution for running the build and unit tests, and that could be done in the cloud. With ESP32 you can mock the hardware to a degree, so you can run some tests that require hardware interaction, but eventually you will also need more hands-on testing that uses physical hardware in the process.