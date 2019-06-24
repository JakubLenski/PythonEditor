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
            'title': 'SHARE CODE',
            'instructions': 'USE A PASSWORD AND OPTIONAL HINT (TO HELP YOU REMEMBER THE PASSWORD) TO SECURELY CREATE A LINK TO SHARE YOUR CODE WITH OTHERS.',
            'passphrase': 'PASSWORD: ',
            'hint': 'PASSWORD HINT: ',
            'button': 'CREATE LINK',
            'description': 'THIS URL POINTS TO YOUR CODE:',
            'shortener': 'THIS IS A SHORT VERSION OF THE LINK:'
        },
        'decrypt': {
            'title': 'DECRYPT SOURCE CODE',
            'instructions': 'ENTER A PASSWORD TO DECRYPT THE SOURCE CODE.',
            'passphrase': 'PASSWORD: ',
            'button': 'DECRYPT'
        },
        'alerts': {
            'download': 'SAFARI HAS A BUG THAT MEANS YOUR WORK WILL BE DOWNLOADED AS AN UN-NAMED FILE. PLEASE RENAME IT TO SOMETHING ENDING IN .HEX. ALTERNATIVELY, USE A BROWSER SUCH AS FIREFOX OR CHROME. THEY DO NOT SUFFER FROM THIS BUG.',
            'save': 'SAFARI HAS A BUG THAT MEANS YOUR WORK WILL BE DOWNLOADED AS AN UN-NAMED FILE. PLEASE RENAME IT TO SOMETHING ENDING IN .PY. ALTERNATIVELY, USE A BROWSER SUCH AS FIREFOX OR CHROME. THEY DO NOT SUFFER FROM THIS BUG.',
            'length': 'OOPS! YOUR SCRIPT IS TOO LONG GIVEN THE LIMITED MEMORY ON THE DEVICE.',
            'unrecognised_hex': "SORRY, WE COULDN'T RECOGNISE THIS FILE",
            'snippets': 'SNIPPETS ARE DISABLED WHEN BLOCKLY IS ENABLED.'
        },
        'confirms': {
          'quit': "SOME OF YOUR CHANGES HAVE NOT BEEN SAVED. QUIT ANYWAY?",
          'blocks': "YOU HAVE UNSAVED CODE. USING BLOCKS WILL CHANGE YOUR CODE. YOU MAY LOSE YOUR CHANGES. DO YOU WANT TO CONTINUE?"
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
          'python': 'EXTRACTED FROM A PYTHON FILE',
          'hex': 'EXTRACTED FROM A HEX FILE'
      },
      'messagebar': {
          'title': 'THIS EDITOR IS OUT OF DATE!',
          'lnk': 'CLICK HERE',
          'instructions': 'TO OPEN THE LATEST VERSION.',
          'close': 'HIDE'
      },
      'load': {
          'title': 'LOAD SCRIPT OR HEX FILE',
          'instructions': 'DRAG AND DROP A .HEX OR .PY FILE IN HERE TO OPEN IT.',
          'submit': 'LOAD',
          'toggle-drop': 'OR DRAG AND DROP A FILE',
          'toggle-file': 'OR PICK A FILE'
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
          'title':'CREATE A LINK TO SHARE YOUR SCRIPT',
          'label':'SHARE'
        }
      }
    },
    'flags': {
      'blocks': false,
      'snippets': true,
      'experimental': false,
      'share': false
    },
};