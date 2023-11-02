## React Analytics Dashboard Task [https://dashboard-next-pjs4.vercel.app/]
- Required to create a basic analytics dashboard using React. The dashboard will display mock campaign performance metrics, product sales data, and competitor/market trends.
- Dashboard should include the following
   - [ ] Campaign Performance Metrics: Display metrics such as click-through rates, conversion rates, and total sales generated from a campaign.
   - [ ] Product Sales Data: Visualize the sales trends of different products over time.
   - [ ] Competitor/Market Trends: Showcase a comparative analysis of your mock company's sales versus competitors.
- Features Should include
   - [ ] Interactivity: Filtering or switching based on specific dates, products, or campaigns.
   - [ ] Responsiveness: Mobile friendly and adaptable regardless of device.
   - [ ] Visual representation of data
   ### Technical Requirements
   - [ ] React should be used for the dashboard
   - [ ] Implement state for the flow of data in our app
   - [ ] Anyform or structure for mock data can be used
   - [ ] Code should be well structured, readable and reusable
   - [ ] Dashboard should be interactive and user should filter specific data.

   ### Brief Summary and Summary of Dashboard
   - [ ] I have built a brief UI Dashboard using React JS, Tailwind css and Rechart to display 3 sorts of data for 2 different Campaigns that you can filter between.
    - [ ] We can see 3 graphs per campaign both representing the following
      - [ ] Campaign Metrics
      - [ ] Different Product Sales
      - [ ] Competitor Trends
   - [ ] You can switch between the different Campaigns to filter and display the different data sets based on the selected campaigns.
   - [ ] You can also filter based on the month, by selecting which ever month you would like to filter the content for, it will automatically load the data.
   - [ ] You should also be able to filter based on highest and lowest product sales based on Month. ( this is part of the same dropdown as the month)
   - [ ] These 2 help to make informed data driven decisions, like the month with the highest sales vs lowest sales.
- [ ] Once you get to the landing page, you should be able to filter based on the Campaign by selecting on the top left Dropdown menu which says 'Choose a Campaign' or you can filter based on specific month and month with highest product sale vs lowest product sale.
- [ ] The 2 Campaigns We currently have running at the moment are
   - [ ] Campaign Move (this is the default campaign selected)
   - [ ] Campaign Shooters ( you will need to select this to see the data filtered )
- [ ] Once you start filtering between the different campaigns, you will see the 3 different graphs reflecting the data.

### Assumptions made 
- [ ] I did not include any APIs, I just figured let me structure my JSON data in a way that is meaningful enough for it to be consistent through different graphs.
- [ ] When you select a different campaign the month filter will be cleared and reset, just so that its clear that you have selected a new data set and would like to filter based on the new data set or campaign.
- [ ] Because the I am displaying data on a specifcic month base, I combined the individual month filter and the month with the highest sales and lowest sales too for the products.
### Design Decisions
- [ ] I went with a conventional dashboard look and feel with this one. Sidebar on the left to display a consistent menu or actions to mimic different places you can go to.
- [ ] I Have the Main Section to contain the 3 graphs and also have menus on top of the graphs to reflect realtime overview data. ( Just in case, maybe you would like to go into more detailed page, however, this is disabled for now). You can hover over the bordered card menu section to see.
- [ ] I went with a Bar graph to display the relationship between shared different data points over time and 2 line graphs to showcase comparisions over different trend nicely over time.
- [ ] For Mobile, I went with a solution that allowed the user to scroll across the screen, so that the large dataset can be viewed at a minimum width, so we can view everything that is important on smaller devices, to avoid it being small and tiny on smaller screens.
- [ ] So you can scroll on mobile just so that you can still view the data, However, on desktop, things are back to normal and there should not be a scroll for a larger screen that is big enough to display the graphs accordingly.
- [ ] All Side bar menu items are also disabled as we do not need to go anywhere, the icons on the header are also disabled, so when you hover over them you will notice the cursor change.
- [ ] Notification is nothing fancy, its just mimicing a simple notification change or update when you filter or switch between the campaigns.

***### Live Deployed Link:[https://dashboard-next-pjs4.vercel.app/]***

### What Do you need to run the application
 - [ ] GIT installed or github desktop ( easier option by far)
 - [ ] NodeJS installed
 - [ ] NPM or Yarn installed
 
 ### How to run the application
 - [ ] git clone the repository into your local machine
 - [ ] once downloaded you can run cd into the folder 'dashboard-next' and run 'yarn'
 - [ ] Once you have installed the dependencies you can run yarn dev to start the server locally. 
 - [ ] **NB  If you have npm instead of yarn installed, run npm install and npm run dev to install and run the server**

 