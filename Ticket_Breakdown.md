# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

I'll break this ticket down into 3 individual tickets.


Ticket #1:

**Title: Implement Facility-Specific Agent IDs**

Acceptance Criteria: 
- Database is updated to include a new field in the Agents table for custom Facility-specific ids
- A function is implemented to allow Facilities to enter and update the custom ids for each Agent they work with
- The custom id is used when generating reports for Facilities

Time/Effort Estimates:
- Database updates: 2 hours
- Function implementation: 4 hours

Implementation Details: 
- Use an external library to perform the database updates
- Function should accept the Facility id, Agent id, and the custom id as arguments
- Function should update the Agents table with the custom id stored against the Facility and Agent ids
- Function should also be able to update an existing custom id
- Function should return a success or failure message


Ticket #2:

**Title: Update getShiftsByFacility Function**

Acceptance Criteria: 
- The getShiftsByFacility function is updated to return the custom Facility-specific id for each Agent

Time/Effort Estimates: 1 hour

Implementation Details: 
- Add a query to the function to retrieve the custom Facility-specific id for each Agent
- Return the custom id alongside the other metadata for each Shift


Ticket #3:

**Title: Update generateReport Function**

Acceptance Criteria: 
- The generateReport function is updated to use the custom Facility-specific id for each Agent

Time/Effort Estimates: 1 hour

Implementation Details: 
- Modify the function to query for the custom Facility-specific id for each Agent
- Replace the internal database id with the custom id in the PDF report