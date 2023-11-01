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

   ### Brief Summary and Summary of Dashboard
   - [ ] I have built a brief UI Dashboard using React JS, Tailwind css and Rechart to display 3 sorts of data for 2 different Campaigns that you can filter between.
    - [ ] We can see 3 graphs per campaign both representing the following
      - [ ] Campaign Metrics
      - [ ] Different Product Sales
      - [ ] Competitor Trends
   - [ ] You can switch between the different Campaigns to filter and display the different data sets based on the selected campaigns.
- [ ] Once you get to the landing page, you should be able to filter based on the Campaign by selecting on the top left Dropdown menu which says 'Choose a Campaign'
- [ ] The 2 Campaigns We currently have running at the moment are
   - [ ] Campaign Move(this is the default campaign selected)
   - [ ] Campaign Shooters (you will need to select this to see the data filtered)
- [ ] Once you start filtering between the different campaigns, you will see the 3 different graphs reflecting the data.

### Assumptions made 
- [ ] I did not include any APIs, I just figured let me structure my JSON data in a way that is meaningful enough for it to be consistent through different graphs.
- [ ] I'm not using any dates in terms of createdAt order or timestamp, Im assuming my data is ordered already based on the campaigns, so in this case, I just filtering based on the selected campaigns.
### Design Decisions
- [ ] I went with a conventional dashboard look and feel with this one. Sidebar on the left to display a consistent menu or actions to mimic different places you can go to.
- [ ] I Have the Main Section to contain the 3 graphs and also have menus on top of the graphs to reflect realtime overview data. ( Just in case, maybe you would like to go into more detailed page, however, this is disabled for now). You can hover over the bordered card menu section to see.
- [ ] I went with a Bar graph to display the relationship between shared different data points over time and 2 line graphs to showcase comparisions over different trend nicely over time.

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

 