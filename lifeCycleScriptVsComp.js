//Gabriel Aboy
//iSystems assessment
/*

 Please explain the life cycle of the typical web application with a server and database backend.
  For example, when a browser hits a web page, what happens first, second, etc.

 1. You type an address in the browser's address bar
 2. An HTTP request is sent to the address.
 3. A response is received, usually in the format of "text/html"
 4. Each browser interprets the HTML slightly differently (and that's why some browsers display certain CSS elements differently,
 makes the frontend developer's job harder)

You're on a website, you see the FRONT END only.
If you go to the Developer Tools (F12) and go to "Sources" you are actually exposed to ALL front end code
(all HTML, CSS, JavaScript,
anything you need to see as a user,
or that affects your interface)

Websites are served in two main ways:

1. The old fashion way, using technologies like PHP, C#, Java etc, that is:
The server processes your request upon entering the URL (stage 2 above), and performs back-end calculations
 (what information you need to see, for example. If you're an admin, you will see more features for example)
 and then you get the response back as-is.

 2. The more modern way, getting common and common, a "single page application" (SPA), you get back pure frontend,
 and all users will get the same files.Then upon performing actions, an asynchronous operation will be done.
  An individual HTTP request for each action is made to the back-end,
 for almost every single operation that requires information from the back-end.
 This makes websites very fast because the processing by the back-end occurs on-the-go, after the site has been loaded
 already and users can already see stuff. Contradictory to the 1st approach,
 where the user sees a blank page until all information is processed by the back-end.
 If you submit a registration form, in the 1st "old fashion" way, you are redirected to a page, and see a blank screen,
  the back-end (say a Node server) processes your registration credentials, and then returns new HTML according to the result
  (successful, failed etc)
  In the "modern" 2nd way, the "SPA" way, using tehcnologies like AJAX, AngularJS, React etc. You submit the registration form
  And a request is made on-the-go to the server, you see some loading indicator, and very quickly you get a response of whether
  the operation was successful and are redirected to another view.



  Please explain the primary differences between Scripting Languages and Compiled Languages.

Scripting languages are programs written for special environments that interpret then execute the code for you.
Compiled languages are programs need compilers that run the code through a life cycle inorder for it to be interprited into
machine language. The first step is preprocessing where the compiler reduces repetition in the source code. Second,
compiling state where the compiler interprites the preprocessing code into assembly instructions. Third, the assembly stage
where it interprites the instructions into machine code. Finally, the linking stage where the machine interprited code is
rearranged existing code and adds missing files.

The difference between the two language types is the compiling steps that compiled languages use versus
the special programs that interpret the script code for a specific run time environment. For example, java versus javascript.
*/
