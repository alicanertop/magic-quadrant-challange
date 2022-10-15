# Challenge Magic Quadrant

[Magic Quadrant](https://en.wikipedia.org/wiki/Magic_Quadrant) is a scatter chart develop by Gartner to visualize major players in a specific market. You can find the sample magic quadrant for Cloud Providers in this [link](https://aws.amazon.com/blogs/aws/aws-named-as-a-cloud-leader-for-the-10th-consecutive-year-in-gartners-infrastructure-platform-services-magic-quadrant/).
Magic Quadrant has two axes:
 1. X-axis (Completeness of Vision): represents relative innovation level.
 2. Y-axis (Ability to Execute): represents relative financial maturity.

We would like you to develop a Magic Quadrant designer, in which users can develop their Magic Quadrants. Please watch the video in this [link](https://youtu.be/RF5xhFNzhYI).

**Your Task**
1. Develop a React app using Typescript.
2. Use `npx create-react-app my-app --template typescript` to create project.
3. Do not use any other library except your favorite CSS-in-js library.
4. Upload your source code to Github or Bitbucket publicly. (It should be clonable and can be runnable by `yarn start` or `npm run start` commands.)
5. Build your code and upload it somewhere publicly accessible to test.

**Requirements**

 1. Every item should have
	 1. `label: string`: Name of the item
	 2. `x:number`: X-axis value (from 0 to 100, 2 decimals)
	 3. `y:number`: Y-axis value (from 0 to 100, 2 decimals)
 2. Table should show item properties and a delete button.
 3. Chart should show item label.
 4. Users should be able to add as many items as they want.
 5. Users should be able to delete existing items.
 6. Users should be able to edit items using the table.
 7. Users should be able to change the x and the y value of an item by dragging the item.
 8. Chart and Table should be in sync.
 9. Items should be preserved when the page is refreshed. (Store locally in the browser)

**Colors Codes**
|Name | Code|
| -- | -- |
| DARK_GREY | #696969 |
|LIGHT_GREY | #E3E4E7 |
|LIGHT_BLUE | #ADB9C3 |
| DARK_BLUE | #3878A2 |
| WHITE | #FFFFFF |

**Colors and Dimensions**

 1. All paddings, margins and border radius values should be similar to the video.
 2. Chart Area : 400px;
	 - width: 400px
	 - height: 400px
	 - border: 2px DARK_GREY
 3. Point on Chart
	 - width: 15px
	 - height: 15px
	 - DARK_BLUE
 4. Label of Points
	 - 13px
	 - sans-serif
	 - DARK_BLUE
 5. Inner axis on Chart
	 - 2px wide
	 - LIGHT_GREY
 6. Label of Areas on Chart
	 - WHITE text
	 - LIGHT_BLUE background
 7. Table Header
	 - LIGHT_BLUE background
	 - WHITE text
	 - sans-serif
8. Buttons
	- LIGHT_GREY background
	- DARK_GREY background on hover 

