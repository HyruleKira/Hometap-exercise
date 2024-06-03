# Hometap-exercise
This repo was created as an exercise for Hometap to test Zillow's Mortgage Calculator.

# Intro
Zillow’s home loan calculator is used to estimate a total mortgage payment including principal and interest, it also estimates for PMI, property taxes, home insurance and HOA fees. There are 4 fields that are required to calculate the estimated mortgage payment, Home Price, Down Payment, Loan Program and Interest Rate. These tests were built with the main focus on the newly implemented interest rate field.  

The Interest Rate field is already preloaded with data provided by representative rates that are based upon national or state specific averages from lenders quoting on Zillow.

The end-to-end tests included in this repo are an error message validation and a real user flow.
[More information including the test cases and data can be found in seperate documentation](https://docs.google.com/document/d/1E2ona04r7wRM1tZZpteg9aKZ041KmMHaxRWA6_sQLuo/edit)

# How to Run
- [Follow these instructions to clone this repo.](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)
- [Follow these instructions to add the project to Cypress.](https://on.cypress.io/guides/getting-started/installing-cypress#Installing)

# Considerations
These tests provide basic coverage for the 4 major fields that are present when first landing on the Mortgage Calculator page. While creating these tests there are several factors that came to mind that could be considered for expanded coverage in the future.
- *Pre-filled data.* At first it may seem helpful to the user but, it can be confusing and cause miscalculated mortgage payment amounts. It isn't until the user clicks "see current rates" that they can actually see what the varied rates can look like per state. The implementation of a test that can include a user looking for property in a different state, could provide coverage for this feature. 
- *User types.* As information is added into different fields the interest rate can vary. This data isn't being presented to the user upfront for them to get more accurate calculations. For example with the loan programs, there are more than just 3 loan program types. The difference in a loan program will change the interest rate and even the down payment requirements.
  
