// Router
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

// Navigator
import Geolocation from "./examples/Geolocation";
import Language from "./examples/Language";
import OnlineStatus from "./examples/OnlineStatus";
import NetworkStatus from "./examples/NetworkStatus";
import Clipboard from "./examples/Clipboard";
import Battery from "./examples/Battery";

// State Management
import Default from "./examples/Default";
import Previous from "./examples/Previous";
import History from "./examples/History";
import Toggle from "./examples/Toggle";
import Count from "./examples/Count";
import LocalStorage from "./examples/LocalStorage";
import SessionStorage from "./examples/SessionStorage";

// Data Structures
import Queue from "./examples/Queue";
import List from "./examples/List";
import Object from "./examples/Object";

// Time Management
import Timeout from "./examples/Timeout";
import Interval from "./examples/Interval";
import RandomInterval from "./examples/RandomInterval";
import Countdown from "./examples/Countdown";
import DebouncedValue from "./examples/DebouncedValue";
import DebouncedCallback from "./examples/DebouncedCallback";
import ThrottledValue from "./examples/ThrottledValue";
import Idle from "./examples/Idle";

// Events
import EventListener from "./examples/EventListener";
import MousePosition from "./examples/MousePosition";
import MouseInOut from "./examples/MouseInOut";
import ClickOutside from "./examples/ClickOutside";
import LongPress from "./examples/LongPress";
import KeyEvent from "./examples/KeyEvent";

// Document
import Favicon from "./examples/Favicon";
import DocumentTitle from "./examples/DocumentTitle";
import DocumentVisibility from "./examples/DocumentVisibility";
import ScrollLock from "./examples/ScrollLock";

// Screen / Window / Viewport
import ScreenOrientation from "./examples/ScreenOrientation";
import WindowSize from "./examples/WindowSize";
import ViewportSize from "./examples/ViewportSize";
import MediaQuery from "./examples/MediaQuery";
import WindowScroll from "./examples/WindowScroll";

// Network
import Fetch from "./examples/Fetch";

// Development Tools
import IsClient from "./examples/IsClient";
import LifecycleLogger from "./examples/LifecycleLogger";

// Component
const App = () => {
  return (
    <Router>
      <div className="app">
        <nav className="nav">
          <h2>🪝 Hooks</h2>

          <h3>Navigator</h3>
          <NavLink to="/">useGeolocation</NavLink>
          <NavLink to="/language">useLanguage</NavLink>
          <NavLink to="/online-status">useOnlineStatus</NavLink>
          <NavLink to="/network-status">useNetworkStatus</NavLink>
          <NavLink to="/clipboard">useClipboard</NavLink>
          <NavLink to="/battery">useBattery</NavLink>

          <h3>State Management</h3>
          <NavLink to="/default">useDefault</NavLink>
          <NavLink to="/previous">usePrevious</NavLink>
          <NavLink to="/history">useHistory</NavLink>
          <NavLink to="/toggle">useToggle</NavLink>
          <NavLink to="/count">useCount</NavLink>
          <NavLink to="/local-storage">useLocalStorage</NavLink>
          <NavLink to="/session-storage">useSessionStorage</NavLink>

          <h3>Data Structures</h3>
          <NavLink to="/queue">useQueue</NavLink>
          <NavLink to="/list">useList</NavLink>
          <NavLink to="/object">useObject</NavLink>

          <h3>Time Management</h3>
          <NavLink to="/timeout">useTimeout</NavLink>
          <NavLink to="/interval">useInterval</NavLink>
          <NavLink to="/random-interval">useRandomInterval</NavLink>
          <NavLink to="/countdown">useCountdown</NavLink>
          <NavLink to="/debounced-value">useDebouncedValue</NavLink>
          <NavLink to="/debounced-callback">useDebouncedCallback</NavLink>
          <NavLink to="/throttled-value">useThrottledValue</NavLink>
          <NavLink to="/idle">useIdle</NavLink>

          <h3>Events</h3>
          <NavLink to="/event-listener">useEventListener</NavLink>
          <NavLink to="/mouse-position">useMousePosition</NavLink>
          <NavLink to="/mouse-in-out">useMouseInOut</NavLink>
          <NavLink to="/click-outside">useClickOutside</NavLink>
          <NavLink to="/long-press">useLongPress</NavLink>
          <NavLink to="/key-event">useKeyEvent</NavLink>

          <h3>Document</h3>
          <NavLink to="/favicon">useFavicon</NavLink>
          <NavLink to="/document-title">useDocumentTitle</NavLink>
          <NavLink to="/document-visibility">useDocumentVisibility</NavLink>
          <NavLink to="/scroll-lock">useScrollLock</NavLink>

          <h3>Screen / Window / Viewport</h3>
          <NavLink to="/screen-orientation">useScreenOrientation</NavLink>
          <NavLink to="/window-size">useWindowSize</NavLink>
          <NavLink to="/viewport-size">useViewportSize</NavLink>
          <NavLink to="/media-query">useMediaQuery</NavLink>
          <NavLink to="/window-scroll">useWindowScroll</NavLink>

          <h3>Network</h3>
          <NavLink to="/fetch">useFetch</NavLink>

          <h3>Development Tools</h3>
          <NavLink to="/is-client">useIsClient</NavLink>
          <NavLink to="/lifecycle-logger">useLifecycleLogger</NavLink>
        </nav>

        <main className="main">
          <div className="content">
            <Routes>
              {/* Navigator */}
              <Route path="/" element={<Geolocation />} />
              <Route path="/geolocation" element={<Geolocation />} />
              <Route path="/language" element={<Language />} />
              <Route path="/online-status" element={<OnlineStatus />} />
              <Route path="/network-status" element={<NetworkStatus />} />
              <Route path="/clipboard" element={<Clipboard />} />
              <Route path="/battery" element={<Battery />} />

              {/* State Management */}
              <Route path="/default" element={<Default />} />
              <Route path="/previous" element={<Previous />} />
              <Route path="/history" element={<History />} />
              <Route path="/toggle" element={<Toggle />} />
              <Route path="/count" element={<Count />} />
              <Route path="/local-storage" element={<LocalStorage />} />
              <Route path="/session-storage" element={<SessionStorage />} />

              {/* Data Structures */}
              <Route path="/queue" element={<Queue />} />
              <Route path="/list" element={<List />} />
              <Route path="/object" element={<Object />} />

              {/* Time Management */}
              <Route path="/timeout" element={<Timeout />} />
              <Route path="/interval" element={<Interval />} />
              <Route path="/random-interval" element={<RandomInterval />} />
              <Route path="/countdown" element={<Countdown />} />
              <Route path="/debounced-value" element={<DebouncedValue />} />
              <Route
                path="/debounced-callback"
                element={<DebouncedCallback />}
              />
              <Route path="/throttled-value" element={<ThrottledValue />} />
              <Route path="/idle" element={<Idle />} />

              {/* Events */}
              <Route path="/event-listener" element={<EventListener />} />
              <Route path="/mouse-position" element={<MousePosition />} />
              <Route path="/mouse-in-out" element={<MouseInOut />} />
              <Route path="/click-outside" element={<ClickOutside />} />
              <Route path="/long-press" element={<LongPress />} />
              <Route path="/key-event" element={<KeyEvent />} />

              {/* Document */}
              <Route path="/favicon" element={<Favicon />} />
              <Route path="/document-title" element={<DocumentTitle />} />
              <Route
                path="/document-visibility"
                element={<DocumentVisibility />}
              />
              <Route path="/scroll-lock" element={<ScrollLock />} />

              {/* Screen / Window / Viewport */}
              <Route
                path="/screen-orientation"
                element={<ScreenOrientation />}
              />
              <Route path="/window-size" element={<WindowSize />} />
              <Route path="/viewport-size" element={<ViewportSize />} />
              <Route path="/media-query" element={<MediaQuery />} />
              <Route path="/window-scroll" element={<WindowScroll />} />

              {/* Network */}
              <Route path="/fetch" element={<Fetch />} />

              {/* Development Tools */}
              <Route path="/is-client" element={<IsClient />} />
              <Route path="/lifecycle-logger" element={<LifecycleLogger />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
};

export default App;
