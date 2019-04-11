var language = {
    'translate': {
        'code_snippets': {
            'title': 'CODE SNIPPETS',
            'description': "CODE SNIPPETS ARE SHORT BLOCKS OF CODE TO RE-USE IN YOUR OWN PROGRAMS. THERE ARE SNIPPETS FOR MOST COMMON THINGS YOU'LL WANT TO DO USING MICROPYTHON.",
            'instructions': "SELECT ONE OF THE SNIPPETS BELOW, OR TYPE THE SNIPPET'S TRIGGER THEN TAP THE TAB KEY.",
            'trigger_heading': 'TRIGGER',
            'descrption_heading': 'DESCRIPTION',
            'docs': 'CREATE A COMMENT TO DESCRIBE YOUR CODE',
            'wh': 'WHILE SOME CONDITION IS TRUE, KEEP LOOPING OVER SOME CODE',
            'with': 'DO SOME STUFF WITH SOMETHING ASSIGNED TO A NAME',
            'cl': 'CREATE A NEW CLASS THAT DEFINES THE BEHAVIOUR OF A NEW TYPE OF OBJECT',
            'def': 'DEFINE A NAMED FUNCTION THAT TAKES SOME ARGUMENTS AND OPTIONALLY ADD A DESCRIPTION',
            'if': 'IF SOME CONDITION IS TRUE, DO SOMETHING',
            'ei': 'ELSE IF SOME OTHER CONDITION IS TRUE, DO SOMETHING',
            'el': 'ELSE DO SOME OTHER THING',
            'for': 'FOR EACH ITEM IN A COLLECTION OF ITEMS DO SOMETHING WITH EACH ITEM',
            'try': 'TRY DOING SOMETHING AND HANDLE EXCEPTIONS (ERRORS)'
        },
        'share': {
            'title': 'Share Code',
            'instructions': 'Use a password and optional hint (to help you remember the password) to securely create a link to share your code with others.',
            'passphrase': 'Password: ',
            'hint': 'Password hint: ',
            'button': 'Create Link',
            'description': 'This URL points to your code:',
            'shortener': 'This is a short version of the link:'
        },
        'decrypt': {
            'title': 'Decrypt Source Code',
            'instructions': 'Enter a password to decrypt the source code.',
            'passphrase': 'Password: ',
            'button': 'Decrypt'
        },
        'alerts': {
            'download': 'Safari has a bug that means your work will be downloaded as an un-named file. Please rename it to something ending in .hex. Alternatively, use a browser such as Firefox or Chrome. They do not suffer from this bug.',
            'save': 'Safari has a bug that means your work will be downloaded as an un-named file. Please rename it to something ending in .py. Alternatively, use a browser such as Firefox or Chrome. They do not suffer from this bug.',
            'length': 'Oops! Your script is too long given the limited memory on the device.',
            'unrecognised_hex': "Sorry, we couldn't recognise this file",
            'snippets': 'Snippets are disabled when blockly is enabled.'
        },
        'confirms': {
            'quit': "Some of your changes have not been saved. Quit anyway?",
            'blocks': "You have unsaved code. Using blocks will change your code. You may lose your changes. Do you want to continue?"
        },
        'code': {
            'start': "# Add your Python code here. E.g.\n" +
                "from microbit import *\n\n\n" +
                "while True:\n" +
                "    display.scroll('Hello, World!')\n" +
                "    display.show(Image.HEART)\n" +
                "    sleep(2000)\n"
        },
        'drop': {
            'python': 'Extracted from a Python file',
            'hex': 'Extracted from a hex file'
        },
        'messagebar': {
            'title': 'This editor is out of date!',
            'link': 'Click here',
            'instructions': 'to open the latest version.',
            'close': 'Hide'
        },
        'load': {
            'title': 'Load Script or HEX file',
            'instructions': 'Drag and drop a .hex or .py file in here to open it.',
            'submit': 'Load',
            'toggle-drop': 'Or drag and drop a file',
            'toggle-file': 'Or pick a file'
        },
        'buttons':{
          'command-download':{
            'title': 'DOWNLOAD A HEX FILE TO FLASH ONTO YOUR MICRO:BIT',
            'label': 'DOWNLOAD'
          },
          'command-save':{
            'title':'SAVE YOUR PYTHON CODE TO YOUR COMPUTER',
            'label':'SAVE'
          },
          'command-load':{
            'title':'LOAD PYTHON CODE OR HEX FILE INTO THE EDITOR',
            'label':'LOAD'
          },
          'command-blockly':{
            'title':'CLICK TO CREATE CODE WITH BLOCKLY',
            'label':'BLOCKLY'
          },
          'command-snippet':{
            'title':'CLICK TO SELECT A SNIPPET (CODE SHORTCUT)',
            'label':'SNIPPETS'
          },
          'command-help':{
            'title':'DISCOVER HELPFUL RESOURCES',
            'label':'HELP'
          },
          'command-language':{
            'title':'SELECT A LANGUAGE',
            'label':'LANGUAGE'
          },
          'command-share':{
            'title':'Create a link to share your script',
            'label':'Share'
          }
        }
    },
    'microPythonApi': microPythonApi,
    'flags': {
        'blocks': false,
        'snippets': true,
        'experimental': false,
        'share': false,
        'options':true
    }
};