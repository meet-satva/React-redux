
function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <p>
                Use the AntD "Layout", "Sider", and "Header" components to build a shell. <br></br><br></br>
Integrate react-router-dom so that clicking menu items in the Sidebar changes the URL and the main content. <br></br> <br></br>
Dark Mode Toggle: Create a themeSlice in Redux. When toggled, change the AntD theme or at least the sidebar's theme="dark" or theme="light" prop.<br></br> <br></br>
The Challenge: Persist the Sidebar's "collapsed" state in Redux so that even if the user navigates to a different page, the sidebar stays collapsed or expanded based on their last choice.
            </p>
        </div>
    );
}

export default Dashboard;